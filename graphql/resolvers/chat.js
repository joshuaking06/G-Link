const Chatroom = require('../../models/chatroom')
module.exports = {
    createChatroom: async (args) => {
        try {
            const chatRoom = await Chatroom.create(args.userInput)
            return { ...chatRoom._doc, _id: chatRoom.id }
        } catch (err) {
            throw err
        }
    },
    updateChatroom: async (args) => {
        try {
            const chatRoom = await Chatroom.findOne({ 'user': { $all: args.userInput.user } })
            await chatRoom.messages.push(args.userInput.message)
            await chatRoom.save()
            return { ...args.userInput.message, chatRoomId: chatRoom.id }
        } catch (err) {
            throw err
        }
    },



    showChatroom: async (args) => {
        try {
            const chatRoom = await Chatroom.findOne({ 'user': { $all: args.query } })
            await chatRoom.populate('user').execPopulate()
            await chatRoom.populate('messages').execPopulate()
            await chatRoom.populate('messages user').execPopulate()

            console.log(chatRoom)
            return { ...chatRoom._doc, _id: chatRoom.id }
        } catch (err) {
            throw err
        }
    }
}





// function showRoute(req, res) {
//     '5cb51dc4452adb56b8127eeb'

//     const arr = ["5cb51949c94e70535a38a039", "5cb5174249414f4e9dec2709"]
//     Chatroom
//         .find({ 'user': { $all: arr } })
//         .populate('user')
//         .populate('message.user')
//         .then((messages) => res.status(201).json(messages))
//         .catch(err => res.status(201).json({ errors: err }))
// }
