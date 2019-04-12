require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')

const graphQLSchema = require('./graphql/schema/index')

const PORT = process.env.PORT || 4000
const app = express()

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

app.listen(PORT, () => console.log(`express is running on port ${PORT}`))
