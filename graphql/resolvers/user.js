const bcrypt = require('bcrypt');
const User = require('../../models/user');
const Game = require('../../models/game')
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
    createUser: async args => {
        try {
            if (args.userInput.password !== args.userInput.passwordConfirmation) {
                throw new Error('Passwords doesnot match.');
            }
            args.userInput.password = await bcrypt.hash(args.userInput.password, 12);
            const user = await User.create(args.userInput)
            return { ...user._doc, password: null, _id: user.id };
        }
        catch (err) {
            throw err;
        }
    },
    getUsers: async args => {
        try {
            const user = await User.findById(args);
            if (!user) {
                throw new Error('User does not exist!');
            }
            await user.populate('gamesInterestedIn._id')
            return { ...user._doc, password: null, _id: user.id };

        }
        catch (err) {
            throw err;
        }
    },

    updateUserGameInterest: async args => {

        try {
            let user = await User.findById(args.userInput._id);
            const game = await Game.findById(args.userInput.gameId)

            if (!user) {
                throw new Error('User does not exist!');
            }

            if (user.gamesInterestedIn.includes(new ObjectId(args.userInput.gameId))) {
                throw new Error('Games has already been added');
            }
            user.gamesInterestedIn.push(game)
            await user.save()
            return { ...user._doc, password: null, _id: user._id };
        }
        catch (err) {
            throw err;
        }
    },
    removeUserGameInterest: async args => {

        try {
            let user = await User.findById(args.userInput._id);
            await User.update(
                { _id: args.userInput._id },
                { $pull: { gamesInterestedIn: args.userInput.gameId } }
            )
            return { ...user._doc, password: null, _id: user._id };
        }
        catch (err) {
            throw err;
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