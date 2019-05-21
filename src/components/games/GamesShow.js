import React from 'react'
import axios from 'axios'

// child components---------------------------------------------------------------------------
import GameCoverImageCard from './GameCoverImageCard'
import TabBox from './TabBox'

// helpers ------------------------------------------------------------------------------------------
import Auth from '../../lib/Auth'
const headers = { headers: { Authorization: `Bearer ${Auth.getToken()}` } }
import { Link } from 'react-router-dom'

const addGameMutation = (id) => {
	return `mutation{
		updateUserGameInterest(gameId:"${id}"){
			_id username 
		}
	}`
}

const removeGameMutation = (id) => {
	return `mutation{
		removeUserGameInterest(gameId:"${id}"){
			_id username
		}
	}`
}

const getGameQuery = (id) => {
	return `query{
		getGame(id:${id}){
			_id
			id
			name
			rating
			rating_count
			url
			summary
			cover{ url }
			screenshots { url }
			videos { name video_id }
			genres { name }
			game_modes { name }
			similar_games { name id cover { url } }
			usersInterestedin { username _id }
		}
	}`
}


const getChatId = (id) => {
	return `mutation{
		getChatroom(userInput: {user: ["${Auth.getUserID()}","${id}"] }){
			_id
		}
	}`
}



// component code-----------------------------------------------------------------------------------------
export default class GamesShow extends React.Component {
	constructor(props) {
		super(props)

		this.addGameToInterests = this.addGameToInterests.bind(this)
		this.removeGameFromInterests = this.removeGameFromInterests.bind(this)
		this.createMessage = this.createMessage.bind(this)

	}

	addGameToInterests(id) {
		const str = addGameMutation(id)
		axios
			.post('/api/graphql', { query: str }, headers)
			.then((res) => {
				// console.log(res.data.data.updateUserGameInterest)
				const usersInterestedin = [...this.state.game.usersInterestedin, res.data.data.updateUserGameInterest]
				const game = { ...this.state.game, usersInterestedin: usersInterestedin }
				this.setState({ ...this.state, isInterested: true, game })
			})
			.catch((err) => console.log(err))
	}

	removeGameFromInterests(id) {
		const str = removeGameMutation(id)
		axios
			.post('/api/graphql', { query: str }, headers)
			.then((res) => {
				const userId = res.data.data.removeUserGameInterest._id
				const usersInterestedin = this.state.game.usersInterestedin.filter(elem => elem === userId)
				const game = { ...this.state.game, usersInterestedin: usersInterestedin }
				this.setState({ ...this.state, isInterested: false, game })
			})
			.catch((err) => console.log(err))
	}

	componentDidMount() {
		axios
			.post('/api/graphql', { query: getGameQuery(this.props.match.params.id) })
			.then((data) => {
				console.log(data.data.data.getGame.usersInterestedin)
				const isInterested = data.data.data.getGame.usersInterestedin.some((user) => {
					return user._id === Auth.getUserID()
				})

				this.setState({ game: data.data.data.getGame, isInterested })
			})
			.catch((err) => console.log(err))
	}

	createMessage(e) {
		const str = getChatId(e.target.id)
		axios
			.post('/api/graphql', { query: str }, headers)
			.then((res) => {
				this.props.history.push(`/messages/${res.data.data.getChatroom._id}/show`);
			})
			.catch((err) => console.log(err))
	}

	render() {
		if (!this.state) return <h1>Loading...</h1>
		const { game, isInterested } = this.state
		// console.log(game)
		return (
			<section className="section game-section">
				<div className=" game-show container">
					{/* refactor this to be a reusable component along with the search version */}
					<section className="game-hero hero is-small is-centered">
						<div className="hero-body">
							<div className="container">
								<h1 className="title is-1">{game.name}</h1>
							</div>
						</div>
					</section>

					<div className="columns">
						<div className="column is-4">
							<GameCoverImageCard
								isInterested={isInterested}
								removeGameFromInterests={this.removeGameFromInterests}
								addGameToInterests={this.addGameToInterests}
								game={game}
							/>
							<div className="card linkup-card">
								<header className="card-header">
									<p className="card-header-title">Link Up with Others</p>
								</header>
								<div className="card-content">
									<div className="content">
										{game.usersInterestedin.map((user) => (
											<p key={user._id} className="user-interested">
												<span>{user.username}</span>
												{Auth.isAuthenticated() && (user._id !== Auth.getUserID()) && <span className="icon is-small is-left">

													<a className="navbar-item" onClick={this.createMessage} id={user._id}>
														<i className="fas fa-comment" id={user._id} />
													</a>
												</span>}
											</p>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="column is-8 data-section">
							<TabBox game={game} />
						</div>
					</div>
				</div>
			</section>
		)
	}
}
