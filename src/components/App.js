import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import components
import Login from './auth/Login'
import Home from './Home'
import NavBar from './common/Navbar'

class App extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<main>
						<NavBar />
						<Switch>
							<Route path="/login" component={Login} />
							<Route path="/register" component={Login} />
							<Route path="/" component={Home} />
						</Switch>
					</main>
				</BrowserRouter>
			</div>
		)
	}
}

export default App
