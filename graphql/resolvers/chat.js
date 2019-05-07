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
            const chatRoom = await Chatroom.findById(args.userInput.user)
            await chatRoom.messages.push(args.userInput.message)
            await chatRoom.save()
            return { ...args.userInput.message, chatRoomId: chatRoom.id }
        } catch (err) {
            throw err
        }
    }, showChatroom: async (args) => {
        try {
            const chatRoom = await Chatroom.findById(args.query)
            await chatRoom.populate('user').execPopulate()
            await chatRoom.populate('messages').execPopulate()
            return { ...chatRoom._doc, _id: chatRoom.id }
        } catch (err) {
            throw err
        }
    },


    // showChatroom: async (args) => {
    //     try {
    //         const chatRoom = await Chatroom.findOne({ 'user': { $all: args.query } })
    //         await chatRoom.populate('user').execPopulate()
    //         await chatRoom.populate('messages').execPopulate()
    //         await chatRoom.populate('messages user').execPopulate()
    //         return { ...chatRoom._doc, _id: chatRoom.id }
    //     } catch (err) {
    //         throw err
    //     }
    // },

    showIndexChatroom: async (args) => {
        try {
            let indexchatRoom = await Chatroom.find({ 'user': { $in: [args.query] } })
            indexchatRoom = await indexchatRoom.map(elem => elem.populate('user').execPopulate())
            return indexchatRoom
        } catch (err) {
            throw err
        }
    }
}
