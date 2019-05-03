import React from 'react'
import axios from 'axios'

export default class GamesShow extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<section className="section game-section">
				<div className=" game-show container">
					<section className="game-hero hero is-small is-centered">
						<div className="hero-body">
							<div className="container">
								<h1 className="title is-1">Dark Souls III</h1>
							</div>
						</div>
					</section>
					<h1>Hello World</h1>
				</div>
			</section>
		)
	}
}
