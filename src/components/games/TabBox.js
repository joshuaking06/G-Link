import React from 'react'

export default class TabBox extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			active: 'info'
		}
	}

	render() {
		return (
			<div>
				<div className="tabs is-boxed is-medium">
					<ul>
						<li className="is-active">
							<a className="tab-link">
								<span>Game Info</span>
							</a>
						</li>
						<li>
							<a className="tab-link">
								<span>Screenshots</span>
							</a>
						</li>
						<li>
							<a className="tab-link">
								<span>Videos</span>
							</a>
						</li>
					</ul>
				</div>
				<p>{this.props.game.summary}</p>
			</div>
		)
	}
}
