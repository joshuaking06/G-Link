import React from 'react'
import axios from 'axios'

// child components---------------------------------------------------------------------------
import GameCoverImageCard from './GameCoverImageCard'
import TabBox from './TabBox'

// helpers ------------------------------------------------------------------------------------------
import Auth from '../../lib/Auth'
const headers = { headers: { Authorization: `Bearer ${Auth.getToken()}` } }

const addGameMutation = (id) => {
	return `mutation{
		updateUserGameInterest(gameId:"${id}"){
			_id username gamesInterestedIn { name id }
		}
	}`
}

const removeGameMutation = (id) => {
	return `mutation{
		removeUserGameInterest(gameId:"${id}"){
			_id username gamesInterestedIn { name id }
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
// component code-----------------------------------------------------------------------------------------
export default class GamesShow extends React.Component {
	constructor(props) {
		super(props)

		this.addGameToInterests = this.addGameToInterests.bind(this)
		this.removeGameFromInterests = this.removeGameFromInterests.bind(this)
	}

	addGameToInterests(id) {
		const str = addGameMutation(id)
		axios
			.post('/api/graphql', { query: str }, headers)
			.then((res) => this.setState({ isInterested: true }))
			.catch((err) => console.log(err))
	}

	removeGameFromInterests(id) {
		const str = removeGameMutation(id)
		axios
			.post('/api/graphql', { query: str }, headers)
			.then((res) => this.setState({ isInterested: false }))
			.catch((err) => console.log(err))
	}

	componentDidMount() {
		axios
			.post('/api/graphql', { query: getGameQuery(this.props.match.params.id) })
			.then((data) => {
				const isInterested = data.data.data.getGame.usersInterestedin.some((user) => {
					return user._id === Auth.getUserID()
				})

				this.setState({ game: data.data.data.getGame, isInterested })
			})
			.catch((err) => console.log(err))
	}

	render() {
		if (!this.state) return <h1>Loading...</h1>
		const { game, isInterested } = this.state
		console.log(game)
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
												<span className="icon is-small is-left">
													<i className="fas fa-comment" />
												</span>
											</p>
										))}
										<p className="user-interested">
											<span>Josh2test</span>
											<span className="icon is-small is-left">
												<i className="fas fa-comment" />
											</span>
										</p>
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
