const { buildSchema } = require('graphql')

module.exports = buildSchema(`
type Game{
    _id: ID!
    title: String!
    genre: String!
    price: Float!
    releaseDate: String!
    rating: Float!
}

input GameInput{
    title: String!
    genre: String!
    price: Float!
    releaseDate: String!
    rating: Float!
}

type RootQuery{
    games: [Game!]!
}

type RootMutation{
    createGame(gameInput: GameInput): Game
}

schema{
    query: RootQuery
    mutation: RootMutation
}
`)
