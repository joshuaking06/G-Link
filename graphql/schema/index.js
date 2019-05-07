const { buildSchema } = require('graphql')

// defining all the types of  objects that can or will be sent/received to/from the client

module.exports = buildSchema(`
type Image{
    id: Int!
    game: Int
    height: Float
    image_id: String
    url: String
    width: Float
}

type Video{
    id: Int!
    game: Int!
    name: String
    video_id: String
}

type GenreGameMode{
    id: Int!
    slug: String
    name: String
}

type NestedGame{
    id: Int!
    cover: Int
    name: String
}
type TwitchTv{

    id: String,
    user_id: String,
    user_name: String,
    game_id: String,
    community_ids: [String],
    type: String,
    title: String,
    viewer_count: Int,
    started_at: String,
    language: String,
    thumbnail_url: String,
    tag_ids: [
        String
    ]
}

type Source{
    id: String,
    name: String
}

type GameNews{
    source: Source,
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
    content: String
}


type User {
    _id: ID!
    email: String!
    username: String!
    bio: String
    image: String
    password: String
    passwordConfirmation: String
    gamesInterestedIn: [Game]
  }

type Game{
    _id: ID!
    id: Int!
    name: String!
    rating: Float
    rating_count: Int
    url: String
    summary: String!
    cover: Image
    artworks: [Image]!
    screenshots: [Image]!
    videos: [Video]!
    genres: [GenreGameMode]!
    game_modes: [GenreGameMode]!
    dlcs: [NestedGame]!
    similar_games: [NestedGame]!
    usersInterestedin: [User]
}

type SearchResult{
    id: Int!
    name: String!
    cover: Image
}

type LoginData{
    userId: ID!
    token: String!
    tokenExpiration: Int! 
}

type Message{
        chatRoomId: ID!,
        _id: ID!,
        user: ID!,
        text: String!
        createdAt: String!
        updatedAt: String!
    }


type ChatRoom{
    _id: ID!
    user: [User!]!
    messages:[Message]!
}

type RootQuery{
    searchGames(query: String!): [SearchResult]
    getGame(id: Int!): Game!
    getUsers(_id: ID!): User!
    login(email: String!, password: String!): LoginData!
    indexGame:[Game!]!
    popularStreamers: [TwitchTv]!
    getNews(query: String! ): [GameNews]
    getGameNews(query: String!): [GameNews]
    showChatroom(query: [ID!]!): ChatRoom!
    showIndexChatroom(query: ID!):[ChatRoom]!

}



input UserInput {
    username: String!
    password: String!
    passwordConfirmation: String!
    email: String!
    image: String
    bio: String
}


input ChatRoomsInput {
    user: [ID!]
}

input ChatRoomsUpdateInput {
    user: [ID!],
    message: ChatMessage!
}

input ChatMessage {
    user: ID!,
    text: String! 
}


input UserInterest {
    _id: ID!
    gameId: ID!
}



type RootMutation{
    createUser(userInput: UserInput): User
    updateUserGameInterest(userInput: UserInterest): User
    removeUserGameInterest(userInput: UserInterest): User
    createChatroom(userInput: ChatRoomsInput): ChatRoom
    updateChatroom(userInput: ChatRoomsUpdateInput): Message

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

// {
// 	"user": ["5cb5174249414f4e9dec2709","5cb51949c94e70535a38a039"],
// 	"message":{
// 		"user": "5cb51dc4452adb56b8127eeb",
// 		"text": "hello hill"
// 	}
// }
