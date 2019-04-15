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


type User {
    _id: ID!
    email: String!
    username: String!
    bio: String
    image: String
    password: String
    passwordConfirmation: String
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
    users: User!
}



input UserInput {
    username: String!
    password: String!
    passwordConfirmation: String!
    email: String!
    image: String
    bio: String
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









// createUser(userInput: { username: "sid", password: "user", email: "hello@emial", image: "https://www.telegraph.co.uk/content/dam/films/2017/03/20/bean_trans_NvBQzQNjv4BqFNieKJvd-mi0anfcfhLYGg39oWbqNtszRryLrO6EuiQ.png?imwidth=450", bio: "hello" }){
//     password
//     username
// }