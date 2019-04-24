import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import components
import Login from './auth/Login'

class App extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<main>
						<Switch>
							<Route path="/login" component={Login} />
							<Route path="/register" component={Login} />
							<Route path="/" component={Login} />
						</Switch>
					</main>
				</BrowserRouter>
			</div>
		)
	}
}

export default App
