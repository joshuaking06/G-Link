const Game = require('../../models/game')

const gameHelper = require('../../helpers/getGame-v2')

module.exports = {
	getGame: async (args) => {
		try {
			return Game.findOne({ id: args.id }).then(async (game) => {
				if (game) {
					await game.populate('usersInterestedin').execPopulate()

					return await game
				}
				if (!game) {
					return gameHelper.fetchGame(args.id).then((res) => {
						return Game.create(res).then(async (newGame) => {
							await newGame.populate('usersInterestedin').execPopulate()
							return newGame.save()
						})
					})
				}
			})
		} catch (err) {
			throw err
		}
	},
	searchGames: async ({ query }) => {
		try {
			const results = await gameHelper.searchGames(query)
			console.log(results, 'results')
			return results.data
		} catch (err) {
			throw err
		}
	},
	indexGame: async () => {
		try {
			return Game.find().limit(20).then(async (game) => {
				if (game) {
					return await game
				}
				return await []
			})
		} catch (err) {
			throw err
		}
	},
	createForumPost: async ({ postInput }, req) => {
		if (!req.isAuth) {
			throw new Error('Oops! You need to be logged in to do that!')
		}
		const game = await Game.findById(postInput.gameId)
		const user = await User.findById(req.userId)
		game.messageBoard.push({
			content: postInput.content,
			subject: postInput.subject,
			author: user
		})
		await game.save()
		await game.populate('messageBoard').execPopulate()
		return game
	},
	replyToPost: async ({ reply }) => {
		console.log(reply.content)
	}
}
