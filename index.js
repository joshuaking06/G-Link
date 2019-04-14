require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')

const gameresolver = require('./graphql/resolvers/index')

let gameBack

gameresolver.fetchAndSaveGame('2155').then((res) => {
	gameBack = res
	console.log(gameBack)
})

const graphQLSchema = require('./graphql/schema/index')

const PORT = process.env.PORT || 4000
const app = express()

// mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())

app.use(
	'/graphql',
	graphqlHttp({
		schema: graphQLSchema,
		rootValue: {
			games: () => {
				return games
			},
			createGame: (args, req) => {
				const game = {
					_id: Math.random().toString(),
					title: args.gameInput.title,
					genre: args.gameInput.genre,
					price: +args.gameInput.price,
					releaseDate: args.gameInput.releaseDate,
					rating: +args.gameInput.rating
				}
				games.push(game)
				return game
			}
		},
		graphiql: true
	})
)

// app.listen(PORT, () => console.log(`express is running on port ${PORT}`))
