import React from 'react'
import axios from 'axios'

import GameCoverImageCard from './GameCoverImageCard'
import TabBox from './TabBox'

const queryString = (id) => {
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
			similar_games { name }
		}
	}`
}

export default class GamesShow extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		axios
			.post('/api/graphql', { query: queryString(this.props.match.params.id) })
			.then((data) => this.setState({ game: data.data.data.getGame }))
			.catch((err) => console.log(err))
	}

	render() {
		if (!this.state) return <h1>Loading...</h1>
		const { game } = this.state
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

					<div className="columns game-info-section">
						<div className="column is-4">
							<GameCoverImageCard game={game} />
						</div>
						<div className="column is-8">
							<TabBox game={game} />
						</div>
					</div>
				</div>
			</section>
		)
	}
}
