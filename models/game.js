const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	id: {
		type: Number,
		required: true
	},
	rating: { type: Number },
	rating_count: { type: Number },
	url: { type: String },
	summary: { type: String },
	videos: [
		{
			id: { type: Number },
			game: { type: Number },
			name: { type: String },
			video_id: { type: String }
		}
	],
	similar_games: [
		{
			id: { type: Number },
			cover: { type: Number },
			name: { type: String }
		}
	],
	screenshots: [
		{
			id: { type: Number },
			game: { type: Number },
			height: { type: Number },
			image_id: { type: String },
			url: { type: String },
			width: { type: Number }
		}
	],
	artworks: [
		{
			id: { type: Number },
			game: { type: Number },
			height: { type: Number },
			image_id: { type: String },
			url: { type: String },
			width: { type: Number }
		}
	],
	platforms: [
		{
			id: { type: Number },
			abbreviation: { type: String },
			name: { type: String }
		}
	],
	genres: [
		{
			id: { type: Number },
			slug: { type: String },
			name: { type: String }
		}
	],
	game_modes: [
		{
			id: { type: Number },
			slug: { type: String },
			name: { type: String }
		}
	],
	dlcs: [
		{
			id: { type: Number },
			cover: { type: Number },
			name: { type: String }
		}
	],
	cover: {
		id: { type: Number },
		game: { type: Number },
		height: { type: Number },
		image_id: { type: String },
		url: { type: String },
		width: { type: Number }
	}
})

gameSchema.virtual('usersInterestedin', {
	ref: 'User',
	localField: '_id',
	foreignField: 'gamesInterestedIn'
})

gameSchema.set('toJSON', {
	virtuals: true,
	transform(doc, json) {
		delete json.__v
		delete json.id
		return json
	}
})

module.exports = mongoose.model('Game', gameSchema)
