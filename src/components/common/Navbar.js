import React from 'react'
import { NavLink, Link } from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        G-Links
                    </Link>

                    {/* <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a> */}
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <NavLink className="navbar-item" to="/">
                            Connect With Users
                        </NavLink>
                        <NavLink className="navbar-item" to="/">
                            Popular Games
                        </NavLink>
                        <NavLink className="navbar-item" to="/">
                            Forums
                        </NavLink>
                        <div className="field has-addons navbar-item">
                            <div className="control ">
                                <input className="input " type="text" placeholder="Search...." />
                            </div>
                            <div className="control">
                                <a className="button is-info">
                                    Search
                                </a>
                            </div>
                        </div>
                        <NavLink className="navbar-item" to="/">
                            About
                        </NavLink>
                        <NavLink className="navbar-item" to="/">
                            Profile
                        </NavLink>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link className="button is-primary" to="/register">
                                    <strong>Sign up</strong>
                                </Link>
                                <Link className="button is-light" to="/login">
                                    Log in
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