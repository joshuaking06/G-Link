import React from 'react'
import { NavLink, Link } from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return (
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <Link class="navbar-item" >
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </Link>

                    {/* <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a> */}
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <NavLink class="navbar-item" to="/">
                            Home
      </NavLink>

                        <NavLink class="navbar-item" to="/">
                            Documentation
      </NavLink>

                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <Link class="button is-primary" to="/login">
                                    <strong>Sign up</strong>
                                </Link>
                                <Link class="button is-light" to="/login">
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