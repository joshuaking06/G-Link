const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: 'User name is required',
		unique: 'User name already exists, please enter different User name'
	},
	password: { type: String, required: 'Password is required' },
	email: {
		type: String,
		required: 'Email address is required',
		unique: 'Email address already exists, please enter different Email address'
	},
	image: { type: String },
	gamesInterestedIn: [ { type: mongoose.Schema.ObjectId, ref: 'Game' } ],
	bio: { type: String }
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)

// gamesInterestedIn: [{ type: mongoose.Schema.ObjectId, ref: 'Game' }],
