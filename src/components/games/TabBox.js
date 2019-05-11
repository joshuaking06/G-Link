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
		const genres = game.genres.reduce((string, word) => string + `${word.name}, `, '')
		return (
			<div>
				<div className="tabs is-boxed is-medium">
					<ul>
						<li className="is-active">
							<a onClick={() => this.changeActive('info')} className="tab-link">
								<span>Game Info</span>
							</a>
						</li>
						<li>
							<a
								onClick={() => this.changeActive('screenshots')}
								className="tab-link"
							>
								<span>Screenshots</span>
							</a>
						</li>
						<li>
							<a onClick={() => this.changeActive('videos')} className="tab-link">
								<span>Videos</span>
							</a>
						</li>
					</ul>
				</div>
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
			</div>
		)
	}
}
