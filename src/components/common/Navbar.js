import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../helpers/Auth'

class NavBar extends React.Component {
	constructor() {
		super()

		this.state = {
			value: ''
		}

		this.onChange = this.onChange.bind(this)
		this.logout = this.logout.bind(this)
	}

	onChange({ target: { value } }) {
		this.setState({ value })
	}

	logout() {
		Auth.removeToken()
		this.props.history.push('/')
	}

	render() {
		return (
			<nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
				<div className="container">
					<div className="navbar-brand">
						<Link className="navbar-item" to="/">
							G-Link
						</Link>

						{/* <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a> */}
					</div>
					<div id="navbarBasicExample" className="navbar-menu">
						<div className="navbar-start">
							<Link className="navbar-item" to="/">
								Link Up
							</Link>
							<Link className="navbar-item" to="/">
								Popular Games
							</Link>
							<Link className="navbar-item" to="/">
								Forums
							</Link>
						</div>
						{/* login and sign up buttons */}
						<div className="navbar-end">
							<div className="field has-addons navbar-item">
								<div className="control ">
									<input
										onChange={this.onChange}
										value={this.state.value}
										className="input"
										type="text"
										placeholder="Find a game..."
									/>
								</div>
								<div className="control">
									<Link
										to={`/search/${this.state.value}`}
										className="button is-link is-outlined"
									>
										<i className="fas fa-search" />
									</Link>
								</div>
							</div>
							{!Auth.isAuthenticated() && (
								<div className="navbar-item">
									<div className="buttons">
										<Link className="button is-link is-outlined" to="/register">
											Sign up
										</Link>
										<Link className="button is-link is-outlined" to="/login">
											Log in
										</Link>
									</div>
								</div>
							)}

							{Auth.isAuthenticated() && (
								<div className="navbar-item">
									<button
										onClick={this.logout}
										className="button is-link is-outlined"
									>
										Logout
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default withRouter(NavBar)
