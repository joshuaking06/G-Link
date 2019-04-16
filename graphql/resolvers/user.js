const bcrypt = require('bcrypt');
const User = require('../../models/user');
const Game = require('../../models/game')

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
            return { ...user._doc, password: null, _id: user.id };

        }
        catch (err) {
            throw err;
        }
    },

    updateUserGameInterest: async args => {

        try {
            return { ...args.userInput }
            // let user = await User.findById(args.userInput.id);
            // if (!user) {
            //     throw new Error('User does not exist!');
            // }
            // const game = await Game.findById(args.userInput.gameId)

            // user = await user.gamesInterestedIn.push(game)
            // await user.save();

            // return { ...user._doc, password: null, _id: user.id };
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