const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


// const userSchema = new  mongoose.Schema({
//     email: { type: String, required: 'User name is required', unique: 'User name already exist, please enter different User name' },
//     password: { type: String, required: 'Password is required' }
// })

const userSchema = new mongoose.Schema({
    username: { type: String, required: 'User name is required', unique: 'User name already exist, please enter different User name' },
    password: { type: String, required: 'Password is required' },
    email: { type: String, required: 'Email address is required', unique: 'Email address already exist, please enter different Email address' },
    image: { type: String },
    bio: { type: String }
})

userSchema.plugin(uniqueValidator)

// userSchema.virtual('passwordConfirmation')
//     .set(function setPasswordConfirmation(passwordConfirmation) {
//         this._passwordConfirmation = passwordConfirmation
//     })

module.exports = mongoose.model('User', userSchema)
