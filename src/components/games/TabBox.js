import React from 'react'

export default class TabBox extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			active: 'info'
		}

		this.changeActive = this.changeActive.bind(this)
	}

	changeActive(newActive) {
		this.setState({ active: newActive })
	}

	render() {
		const { active } = this.state
		const { game } = this.props
		console.log(game.screenshots)
		const genres = game.genres.reduce((string, word) => string + `${word.name}, `, '')
		return (
			<div>
				<div className="tabs is-boxed is-medium">
					<ul>
						<li className={this.state.active === 'info' ? 'is-active' : ''}>
							<a onClick={() => this.changeActive('info')} className="tab-link">
								<span>Game Info</span>
							</a>
						</li>
						<li className={this.state.active === 'screenshots' ? 'is-active' : ''}>
							<a
								onClick={() => this.changeActive('screenshots')}
								className="tab-link"
							>
								<span>Screenshots</span>
							</a>
						</li>
						<li className={this.state.active === 'videos' ? 'is-active' : ''}>
							<a onClick={() => this.changeActive('videos')} className="tab-link">
								<span>Videos</span>
							</a>
						</li>
					</ul>
				</div>
				{/* summary and genre info */}
				{active === 'info' && (
					<div>
						<p className="info">{game.summary}</p>
						<p className="info">
							<strong>Genres:</strong> {genres}
						</p>
						<p className="info">
							<strong>Rating:</strong> {Math.round(game.rating)}%
						</p>
					</div>
				)}
				{/* screenshot gallery */}
				{active === 'screenshots' && (
					<div className="columns is-multiline">
						{game.screenshots.map((image) => (
							<div className="column is-2" key={image.url}>
								<figure className="image is-96x96">
									<a>
										<img src={`https:${image.url}`} />
									</a>
								</figure>
							</div>
						))}
					</div>
				)}
			</div>
		)
	}
}
