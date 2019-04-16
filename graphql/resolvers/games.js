const Game = require('../../models/game')

const gameHelper = require('../../helpers/getGame')

module.exports = {
	getGame: async (args) => {
		try {
			return Game.findOne({ id: args.id }).then((game) => {
				if (game) {
					return game
				}
				if (!game) {
					return gameHelper.fetchGame(args.id).then((res) => {
						return Game.create(res).then((newGame) => {
							return newGame.save()
						})
					})
				}
			})
		} catch (err) {
			throw err
		}
	}
}
