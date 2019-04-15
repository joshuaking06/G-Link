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

input UserInput {
    email: String!
    password: String!
    email: String!
    image: String!
    bio: String!
}


type RootMutation{
    createGame(gameInput: GameInput): Game
    createUser(userInput: UserInput): User
}

schema{
    query: RootQuery
    mutation: RootMutation
}
`)
