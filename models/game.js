const mongoose = require('mongoose')
const imageSchema = new mongoose.Schema({
	id: { type: Number },
	game: { type: Number },
	height: { type: Number },
	image_id: { type: String },
	url: { type: String },
	width: { type: Number }
})

const replySchema = new mongoose.Schema({
	content: { type: String, required: true },
	author: { type: mongoose.Schema.ObjectId, ref: 'User' }
})

const forumPostSchema = new mongoose.Schema({
	subject: { type: String, required: true },
	content: { type: String, required: true },
	author: { type: mongoose.Schema.ObjectId, ref: 'User' },
	replies: [ replySchema ]
})

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
	messageBoard: [ forumPostSchema ],
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
			cover: imageSchema,
			name: { type: String }
		}
	],
	screenshots: [ imageSchema ],
	artworks: [ imageSchema ],
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
			cover: imageSchema,
			name: { type: String }
		}
	],
	cover: imageSchema,
	twtichId: { type: Number }
})

gameSchema.virtual('usersInterestedin', {
	ref: 'User',
	localField: '_id',
	foreignField: 'gamesInterestedIn'
})

gameSchema.virtual('messageBoard.author', {
	ref: 'User',
	localField: '_id',
	foreignField: 'author'
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
