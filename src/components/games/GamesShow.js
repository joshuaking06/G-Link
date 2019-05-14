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
			similar_games { name id }
			usersInterestedin { username _id }
		}
	}`
}
// component code-----------------------------------------------------------------------------------------
export default class GamesShow extends React.Component {
	constructor(props) {
		super(props)

		this.addGameToInterests = this.addGameToInterests.bind(this)
	}

	addGameToInterests(id) {
		const str = addGameMutation(id)
		console.log(str, headers)
		axios
			.post('/api/graphql', { query: str }, headers)
			.then((res) => console.log(res))
			.catch((err) => console.log(err))
	}

	componentDidMount() {
		axios
			.post('/api/graphql', { query: getGameQuery(this.props.match.params.id) })
			.then((data) => this.setState({ game: data.data.data.getGame }))
			.catch((err) => console.log(err))
	}

	render() {
		if (!this.state) return <h1>Loading...</h1>
		const { game } = this.state
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
								addGameToInterests={this.addGameToInterests}
								game={game}
							/>
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
