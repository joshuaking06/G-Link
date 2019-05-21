import ReactDOM from 'react-dom'
import React from 'react'
// const socket = require('socket.io-client')(`http://localhost:4000`);
import Auth from './lib/Auth'
//import styles
import './style.scss'
// global.socket = socket
// console.log(global.socket)
if (Auth.isAuthenticated()) {
    global.socket = require('socket.io-client')(`http://localhost:4000`);
}
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))
