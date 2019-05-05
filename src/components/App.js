import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import components
import Login from './auth/Login'
import Home from './home/Home'
import NavBar from './common/Navbar'
import Register from './auth/Register'
import Search from './search/Search'
import GamesShow from './games/GamesShow'
import News from './news/News'
import Messages from './chat/Messages'
import Here from './home/Here'

// import io from '../../node_modules/socket.io/lib/socket'

class App extends React.Component {
	constructor() {
		super()
		// global.socket.on('connect', function () {
		// 	console.log('connected')
		// 	global.socket.emit('chat', 'hello')
		// });
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<main>
						<NavBar />
						<Switch>
							<Route path="/games/:id" component={GamesShow} />
							<Route path="/news" component={News} />
							<Route path="/search/:query" component={Search} />
							<Route path="/search" component={Search} />
							<Route path="/register" component={Register} />
							<Route path="/messages" component={Messages} />
							<Route path="/login" component={Login} />
							<Route path="/" component={Home} />
						</Switch>
					</main>
				</BrowserRouter>
			</div>
		)
	}
}

export default App
