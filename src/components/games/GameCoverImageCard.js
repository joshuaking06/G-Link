import React from 'react'
import { Link } from 'react-router-dom'

const GameCoverImageCard = ({ game, addGameToInterests }) => {
	const cover = (game.cover.url ||
		`//images.igdb.com/igdb/image/upload/t_cover_big/nocover_qhhlj6.jpg`)
		.replace('thumb', 'cover_big')

	return (
		<div className="card">
			<div className="card-image">
				<figure className="image cover-image">
					<img src={`https:${cover}`} alt="Cover Image" />
				</figure>
			</div>
			<div className="card-content">
				<Link to={'/'} className="button is-link is-fullwidth is-outlined">
					Discusson Board
				</Link>
				<div
					className="button is-link is-fullwidth is-outlined"
					onClick={() => addGameToInterests(game._id)}
				>
					Click to add to your list
				</div>
			</div>
		</div>
	)
}

export default GameCoverImageCard
