const bcrypt = require('bcrypt');
const User = require('../../models/user');

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

            return { ...args };
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