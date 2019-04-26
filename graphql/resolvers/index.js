const userResolver = require('./user');
const gamesResolver = require('./games');
const twitchResolver = require('./twitch');

const rootResolver = {
    ...gamesResolver,
    ...userResolver,
    ...twitchResolver
};

module.exports = rootResolver;
