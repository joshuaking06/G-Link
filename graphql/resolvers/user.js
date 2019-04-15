const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
    createUser: async args => {
        // const user = User.create(args.userInput)
        // console.log(...args.userInput)

        try {
            const user = await User.create(args.userInput)




            // const user = new User({
            //     ...args.userInput
            // });

            // const result = await user.save();
            return { ...user._doc, password: null, _id: user.id };
        }
        catch (err) {
            throw err;
        }
        // try {

        //     const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

        //     const user = new User({
        //         email: args.userInput.email,
        //         password: hashedPassword
        //     });

        //     const result = await user.save();
        //     return { ...result._doc, password: null, _id: result.id };
        // } catch (err) {
        //     throw err;
        // }
    }

}