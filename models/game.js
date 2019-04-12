const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
	name: { type: String, required: true },
	image: { type: String, required: true },
	continent: { type: mongoose.Schema.ObjectId, ref: 'Continent', required: true },
	population: { type: String },
	currency: { type: Number },
	videoID: { type: String },
	lat: { type: Number },
	lng: { type: Number }
})

module.exports = mongoose.model('Game', gameSchema)
