const axios = require('axios')

require('dotenv').config()

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
	const game = await getSingleData('games', fields.gamesShow + `where id=${gameId};`)

	// console.log(fields.cover + "where id=43486")
	const cover = await getSingleData(
		'covers',
		`fields id,game,height,width,image_id,url,width; where id=${game.data[0].cover};`
	)
	gameToSave.cover = cover.data[0]
	gameToSave.artworks = await getMultipleData(game.data[0].artworks, 'artworks')
	gameToSave.game_modes = await getMultipleData(game.data[0].game_modes, 'game_modes')
	gameToSave.genres = await getMultipleData(game.data[0].genres, 'genres')
	gameToSave.platforms = await getMultipleData(game.data[0].platforms, 'platforms')
	gameToSave.screenshots = await getMultipleData(game.data[0].screenshots, 'screenshots')
	gameToSave.game_videos = await getMultipleData(game.data[0].videos, 'game_videos')
	gameToSave.dlcs = await getMultipleData(game.data[0].dlcs, 'games')
	gameToSave.similar_games = await getMultipleData(game.data[0].similar_games, 'games')

	gameToSave.player_perspectives = await getMultipleData(
		game.data[0].player_perspectives,
		'player_perspectives'
	)
	gameToSave.name = game.data[0].name
	gameToSave.summary = game.data[0].summary
	gameToSave.slug = game.data[0].slug
	gameToSave.id = game.data[0].id
	gameToSave.rating = game.data[0].rating
	gameToSave.rating_count = game.data[0].rating_count
	gameToSave.url = game.data[0].url
	return gameToSave
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
