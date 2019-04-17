require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const secureRoute = require('./middleware/secureRoute')

const graphQLSchema = require('./graphql/schema/index')
const graphQLResolver = require('./graphql/resolvers/index')

const PORT = process.env.PORT || 4000
const app = express()
mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())

app.use(secureRoute)

app.use(
	'/graphql',
	graphqlHttp({
		schema: graphQLSchema,
		rootValue: graphQLResolver,
		graphiql: true
	})
)

app.listen(PORT, () => console.log(`express is running on port ${PORT}`))
