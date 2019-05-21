const Chatroom = require('../../models/chatroom')
module.exports = {
    getChatroom: async (args) => {
        try {
            let chatRoom = await Chatroom.find({ 'user': { $all: args.userInput.user } })
            if (chatRoom.length == 0) {
                chatRoom = await Chatroom.create(args.userInput)
            }
            return { ...chatRoom[0]._doc, _id: chatRoom[0].id }
        } catch (err) {
            throw err
        }
    },

    showChatroom: async (args) => {
        try {
            const chatRoom = await Chatroom.findById(args.query)
            await chatRoom.populate('user').execPopulate()
            await chatRoom.populate('messages').execPopulate()
            return { ...chatRoom._doc, _id: chatRoom.id }
        } catch (err) {
            throw err
        }
    },

    showIndexChatroom: async (args) => {
        try {
            let indexchatRoom = await Chatroom.find({ 'user': { $in: [args.query] } })
            indexchatRoom = await indexchatRoom.map(elem => elem.populate('user').execPopulate())
            return indexchatRoom
        } catch (err) {
            throw err
        }
    },
    updateChatroom: async (args) => {
        try {
            const chatRoom = await Chatroom.findById(args.chatId)
            await chatRoom.messages.push(args.message)
            await chatRoom.save()
            return { messages: [{ ...args.message, "createdAt": Number(new Date()) }], _id: chatRoom.id }

        } catch (err) {
            throw err
        }
    }
}
