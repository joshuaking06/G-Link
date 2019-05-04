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
import ChatRooms from './chat/ChatRooms'

// import io from '../../node_modules/socket.io/lib/socket'
// import io from 'socket.io-client';

class App extends React.Component {
	constructor() {
		super()
		global.socket.on('connect', function () {
			console.log('connected')
			global.socket.emit('chat', 'hello')
		});
	}
	componentDidMount() {
		// var socket = io();
		// socket.emit('connection')


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
							<Route path="/chatrooms" component={ChatRooms} />
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
