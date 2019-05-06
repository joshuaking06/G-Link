const userResolver = require('./user');
const gamesResolver = require('./games');
const twitchResolver = require('./twitch');
const chatRoomResolver = require('./chat');

const rootResolver = {
    ...gamesResolver,
    ...userResolver,
    ...twitchResolver,
    ...chatRoomResolver
};

module.exports = rootResolver;
