import ReactDOM from 'react-dom'
import React from 'react'
import Auth from './lib/Auth'
//import styles
import './style.scss'

if (Auth.isAuthenticated()) {
    global.socket = require('socket.io-client')(`http://localhost:4000`);
}
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))
