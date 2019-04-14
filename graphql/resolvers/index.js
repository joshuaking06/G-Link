const axios = require('axios')
require('dotenv').config()

const gameToSaveFields = [
	'artworks',
	'genres',
	'platforms',
	'game_modes',
	'screenshots',
	'videos',
	'dlcs'
]
const fields = {
	covers: 'fields alpha_channel,animated,game,height,image_id,url,width;',
	artworks: 'fields alpha_channel,animated,game,height,image_id,url,width;',
	genres: 'fields id,name,slug;',
	platforms: 'fields id,abbreviation,alternative_name,name;',
	game_modes: 'fields name,slug,id;',
	screenshots: 'fields *;',
	game_videos: 'fields *;',
	games: 'fields cover,id,name;',
	player_perspectives: 'fields id,name,slug;',
	gamesShow:
		'fields cover, dlcs,summary, slug,similar_games, screenshots, id, rating, rating_count,platforms, player_perspectives, genres, game_modes, artworks, name, url, videos; exclude tags;'
}

// create and build up a new game object which will be saved to the database
const getGameDataFromApiAndSave = async (gameId) => {
	const gameToSave = {}
	let game = await getSingleData('games', fields.gamesShow + `where id=${gameId};`)
	game = game.data[0]
	const cover = await getSingleData(
		'covers',
		`fields id,game,height,width,image_id,url,width; where id=${game.cover};`
	)
	const otherFieldData = await getOtherFieldData(game)

	gameToSave.player_perspectives = await getMultipleData(
		game.player_perspectives,
		'player_perspectives'
	)

	gameToSaveFields.forEach((field, index) => {
		gameToSave[field] = otherFieldData[index]
	})

	gameToSave.cover = cover.data[0]
	gameToSave.name = game.name
	gameToSave.summary = game.summary
	gameToSave.id = game.id
	gameToSave.rating = game.rating
	gameToSave.rating_count = game.rating_count
	gameToSave.url = game.url
	return gameToSave
}

const getOtherFieldData = (game) => {
	return Promise.all(
		Object.keys(fields)
			.filter((field) => field !== 'covers' && field !== 'gamesShow')
			.map((field) => {
				if (field === 'games') return getMultipleData(game.dlcs, 'games')
				if (field === 'game_videos') return getMultipleData(game.videos, 'game_videos')
				if (field !== 'games' && field !== 'game_videos') {
					return getMultipleData(game[field], field)
				}
			})
	)
}

const getMultipleData = (ids, endpoint) => {
	try {
		return Promise.all(
			ids.map(async (i) => {
				const single = await getSingleData(endpoint, fields[endpoint] + `where id=${i};`)
				return single.data[0]
			})
		)
	} catch (error) {
		console.error(error)
	}
}

const getSingleData = async (endpoint, data) => {
	try {
		return await axios({
			url: `https://api-v3.igdb.com/${endpoint}`,
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'user-key': process.env.USER_KEY
			},
			data: data
		})
	} catch (error) {
		console.log(data)
	}
}

module.exports = {
	fetchAndSaveGame: getGameDataFromApiAndSave
}
