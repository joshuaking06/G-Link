const Chatroom = require('../../models/chatroom')
module.exports = {
    createChatroom: async (args) => {
        return { ...args }
        // try {
        //     const user = await Chatroom.create(args.userInput)
        //     return { ...user._doc, password: null, _id: user.id }
        // } catch (err) {
        //     throw err
        // }
    }
}


// function createRoute(req, res) {
//     Chatroom
//         .create(req.body)
//         .then(() => res.status(201).json({ message: 'message has been created sucessfully' }))
//         .catch(err => res.status(201).json({ errors: err }))
// }