const userResolver = require('./user');
const eventsResolver = require('./events');
const gamesResolver = require('./games');

const rootResolver = {
    ...gamesResolver,
    ...userResolver
};

module.exports = rootResolver;