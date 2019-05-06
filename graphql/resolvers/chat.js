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
            const chatRoom = await Chatroom.find({ 'user': { $all: args.userInput.user } })
            await chatRoom[0].messages.push(args.userInput.message)
            await chatRoom[0].save()
            return { ...args.userInput.message, chatRoomId: chatRoom[0].id }
        } catch (err) {
            throw err
        }
    }
}
