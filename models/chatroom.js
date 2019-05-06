const mongoose = require('mongoose')


const messageSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    text: { type: String, required: true, maxlength: 250 }
}, {
        timestamps: true
    })


//Data structure model
const chatroomSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    messages: [messageSchema]
})

chatroomSchema.set('toJSON', {
    transform(doc, json) {
        delete json.__v
        return json
    }
})

module.exports = mongoose.model('Chatroom', chatroomSchema)