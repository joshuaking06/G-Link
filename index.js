require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')

const gameresolver = require('./graphql/resolvers/games')

const graphQLSchema = require('./graphql/schema/index')
const graphQLResolver = require('./graphql/resolvers/index')

const PORT = process.env.PORT || 4000
const app = express()
// mongoose.connect(process.env.MONGODB_URI)
// const gameHelper = require('./helpers/getGame')
// const Game = require('./models/Game')

// testing fetch function
// let gameBack
// Game.findOne({ id: 2166 }).then((game) => {
// 	if (game) console.log(game)
// 	if (!game) {
// 		gameHelper.fetchGame(2166).then((res) => {
// 			gameBack = res
// 			Game.create(gameBack).then((game) => game.save())
// 		})
// 	}
// })

app.use(bodyParser.json())

app.use(
	'/graphql',
	graphqlHttp({
		schema: graphQLSchema,
		rootValue: graphQLResolver,
		graphiql: true
	})
)

app.listen(PORT, () => console.log(`express is running on port ${PORT}`))
