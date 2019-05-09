require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const secureRoute = require('./middleware/secureRoute')

const graphQLSchema = require('./graphql/schema/index')
const graphQLResolver = require('./graphql/resolvers/index')
const graphQLWebSocketResolver = require('./graphql/resolvers/chat');

const PORT = process.env.PORT || 4000
const app = express()
mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())

app.use(secureRoute)

app.use(
	'/api/graphql',
	graphqlHttp({
		schema: graphQLSchema,
		rootValue: graphQLResolver,
		graphiql: true
	})
)

app.use(express.static(`${__dirname}/dist`))


// app.use('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))


const server = app.listen(PORT, () => console.log(`express is running on port ${PORT}`))
const io = require('socket.io')(server)
// global.io = io

// io.on('connection', socketRoutes.respond)

io.on('connection', function (socket) {
	console.log('an user connected')
	socket.on('chat message', async (msg) => {
		io.emit('RECEIVE_MESSAGE', { ...await graphQLWebSocketResolver.updateChatroom(msg) })
		// io.emit('RECEIVE_MESSAGE', { messages: [{ ...msg.message, "createdAt": Number(new Date()) }], _id: msg.chatId })

	})
})