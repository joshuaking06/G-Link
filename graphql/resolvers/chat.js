const Chatroom = require('../../models/chatroom')
module.exports = {
    createChatroom: async (args) => {
        // console.log(args.userInput.user)

        try {
            // console.log(args)
            let chatRoom = await Chatroom.find({ 'user': { $all: args.userInput.user } })
            console.log(chatRoom.length == 0)
            if (chatRoom.length == 0) {
                chatRoom = await Chatroom.create(args.userInput)
            }
            console.log(chatRoom)

            //     // const chatRoom = await Chatroom.create(args.userInput)
            return { ...chatRoom._doc, _id: chatRoom.id }
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
