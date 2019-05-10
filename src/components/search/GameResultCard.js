import React from 'react'

const GameResultCard = ({ game }) => {
	console.log(game)
	return (
		<div className="media search-result">
			<figure className="media-left">
				<p className="image is-4by3">
					{game.cover && <img src={`https:${game.cover.url}`} />}
				</p>
			</figure>
			<div className="media-content">
				<div className="content">
					<p>
						<strong>{game.name}</strong>
					</p>
				</div>
			</div>
		</div>
	)
}

export default GameResultCard
