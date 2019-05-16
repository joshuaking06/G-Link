const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const Game = require('../../models/game')

module.exports = {
	createUser: async (args) => {
		try {
			if (args.userInput.password !== args.userInput.passwordConfirmation) {
				throw new Error('Passwords do not match.')
			}
			args.userInput.password = await bcrypt.hash(args.userInput.password, 12)
			const user = await User.create(args.userInput)
			return { ...user._doc, password: null, _id: user.id }
		} catch (err) {
			throw err
		}
	},
	getUsers: async (args) => {
		try {
			let user = await User.findById(args)
			if (!user) {
				throw new Error('User does not exist!')
			}
			await user.populate('gamesInterestedIn').execPopulate()
			return { ...user._doc, password: null, _id: user.id }
		} catch (err) {
			throw err
		}
	},
	updateUserGameInterest: async (args, req) => {
		if (!req.isAuth) {
			throw new Error('Oops! You need to be logged in to do that!')
		}
		try {
			let user = await User.findById(req.userId)
			const game = await Game.findById(args.gameId)
			if (!user) {
				throw new Error('User does not exist!')
			}
			if (user.gamesInterestedIn.some((game) => game.equals(args.gameId))) {
				throw new Error('Games has already been added')
			}
			user.gamesInterestedIn.push(game)
			await user.save()
			await user.populate('gamesInterestedIn').execPopulate()
			return { ...user._doc, password: null, _id: user._id }
		} catch (err) {
			throw err
		}
	},
	removeUserGameInterest: async (args, req) => {
		if (!req.isAuth) {
			throw new Error('Oops! You need to be logged in to do that!')
		}
		try {
			await User.update({ _id: req.userId }, { $pull: { gamesInterestedIn: args.gameId } })
			const user = await User.findById(req.userId)
			await user.populate('gamesInterestedIn').execPopulate()
			if (!user) {
				throw new Error('User does not exist!')
			}
			return { ...user._doc, password: null, _id: user._id }
		} catch (err) {
			throw err
		}
	},
	login: async ({ email, password }) => {
		const user = await User.findOne({ email: email })
		if (!user) {
			throw new Error('User does not exist!')
		}
		const correctPw = await bcrypt.compare(password, user.password)
		if (!correctPw) {
			throw new Error('Incorrect Password!')
		}
		const token = jwt.sign({ userId: user._id }, process.env.SECRET, { expiresIn: '2h' })
		return {
			userId: user.id,
			token: token,
			tokenExpiration: 2
		}
	}
}

///(_id: ID!)

// ,
//     getUsers: async args => {
//         try {

//             return { ...args };
//         }
//         catch (err) {
//             throw err;
//         }
//     }
