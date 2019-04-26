import React from 'react'
import { NavLink, Link } from 'react-router-dom'

class NavBar extends React.Component {
	render() {
		return (
			<nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
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
						<a className="navbar-item" to="/">
							Link Up
						</a>
						<a className="navbar-item" to="/">
							Popular Games
						</a>
						<a className="navbar-item" to="/">
							Forums
						</a>
					</div>
					{/* login and sign up buttons */}
					<div className="navbar-end">
						<div className="field has-addons navbar-item">
							<div className="control ">
								<input className="input" type="text" placeholder="Find a game..." />
							</div>
							<div className="control">
								<a className="button is-link is-outlined">
									<i className="fas fa-search" />
								</a>
							</div>
						</div>
						<div className="navbar-item">
							<div className="buttons">
								<Link className="button is-link is-outlined" to="/register">
									<strong>Sign up</strong>
								</Link>
								<Link className="button is-link is-outlined" to="/login">
									<strong> Log in </strong>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default NavBar
