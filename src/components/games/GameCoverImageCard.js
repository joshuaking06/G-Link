import React from 'react'
import { Link } from 'react-router-dom'

const GameCoverImageCard = ({ game }) => {
	const cover = game.cover.url.replace('thumb', 'cover_big')
	console.log(cover)
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
			</div>
		</div>
	)
}

export default GameCoverImageCard
