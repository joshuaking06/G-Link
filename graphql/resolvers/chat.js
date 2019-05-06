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
            console.log(chatRoom)
            await chatRoom.messages.push(args.userInput.message)
            await chatRoom.save()
            return { ...args.userInput.message, chatRoomId: chatRoom.id }
        } catch (err) {
            throw err
        }
    }
}
