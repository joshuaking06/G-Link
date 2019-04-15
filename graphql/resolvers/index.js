const userResolver = require('./user');
const gamesResolver = require('./games');

const rootResolver = {
    ...gamesResolver,
    ...userResolver
};

module.exports = rootResolver;