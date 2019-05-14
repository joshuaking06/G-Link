import React from 'react'

export default class TabBox extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			active: 'info',
			modalUrl: ''
		}

		this.changeActive = this.changeActive.bind(this)
		this.openModal = this.openModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
	}

	changeActive(newActive) {
		this.setState({ active: newActive })
	}

	openModal(url) {
		const newUrl = url.length > 15 ? `https:${url}`.replace('thumb', 'screenshot_big') : url
		this.setState({ modalUrl: newUrl })
	}

	closeModal(e) {
		this.setState({ modalUrl: '' })
	}

	render() {
		const { active, modalUrl } = this.state
		const { game } = this.props
		const genres = game.genres.reduce((string, word) => string + `${word.name}, `, '')
		const gameModes = game.game_modes.reduce((string, word) => string + `${word.name}, `, '')
		return (
			<div>
				<div className="tabs is-boxed is-medium">
					<ul>
						<li className={this.state.active === 'info' ? 'is-active' : ''}>
							<a onClick={() => this.changeActive('info')} className="tab-link">
								<span>Game Info</span>
							</a>
						</li>
						<li className={this.state.active === 'videos' ? 'is-active' : ''}>
							<a onClick={() => this.changeActive('videos')} className="tab-link">
								<span>Videos</span>
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
							<strong>Modes:</strong> {gameModes}
						</p>
						<p className="info">
							<strong>Rating:</strong> {Math.round(game.rating)}%
						</p>
					</div>
				)}

				{active === 'videos' && (
					<div className="columns is-multiline">
						{game.videos.map((vid) => (
							<div className="column is-2" key={vid.video_id}>
								<figure className="image is-96x96">
									<a onClick={() => this.openModal(vid.video_id)}>
										<img
											src={`https://img.youtube.com/vi/${vid.video_id}/0.jpg`}
										/>
									</a>
								</figure>
							</div>
						))}
					</div>
				)}

				{/* screenshot gallery */}
				{active === 'screenshots' && (
					<div className="columns is-multiline">
						{game.screenshots.map((image) => (
							<div className="column is-2" key={image.url}>
								<figure className="image is-96x96">
									<a onClick={() => this.openModal(image.url)}>
										<img src={`https:${image.url}`} />
									</a>
								</figure>
							</div>
						))}
					</div>
				)}

				<div className={modalUrl === '' ? 'modal' : 'modal is-active'}>
					<div className="modal-background" />
					<div className="modal-content">
						{modalUrl.length > 15 && (
							<p className="image is-3by2">
								<img src={modalUrl || ''} />
							</p>
						)}

						{modalUrl.length < 16 && (
							<iframe
								id="video-modal"
								width="560"
								height="315"
								src={`https://www.youtube.com/embed/${modalUrl}`}
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						)}
					</div>
					<button
						onClick={this.closeModal}
						className="modal-close is-large"
						aria-label="close"
					/>
				</div>
			</div>
		)
	}
}
