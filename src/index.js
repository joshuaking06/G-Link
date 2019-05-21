import ReactDOM from 'react-dom'
import React from 'react'
import Auth from './lib/Auth'
//import styles
import './style.scss'

console.log(!global.socket)
if (!global.socket && Auth.isAuthenticated()) {
    global.socket = require('socket.io-client')(`http://localhost:4000`);
}
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))
