const axios = require('axios')

const fields = {
	cover: 'fields alpha_channel,animated,game,height,image_id,url,width;',
	artworks: 'fields alpha_channel,animated,game,height,image_id,url,width;',
	genres: 'fields id,name,slug;',
	platforms: 'fields id,abbreviation,alternative_name,name;',
	game_modes: 'fields name,slug,id;',
	games:
		'fields cover, summary, slug, similar_games, screenshots, id, rating, rating_count,platforms, player_perspectives, genres, game_modes, dlcs, artworks, name, url, videos; exclude tags;'
}

// create and build up a new game object which will be saved to the database
const getGameDataFromApiAndSave = async (gameId) => {
	const gameToSave = {}
	const game = await getSingleData('games', fields.games + `where id=${gameId};`)

	// console.log(fields.cover + "where id=43486")
	// const cover = await getSingleData('covers', `fields id,game,height,width,image_id,url,width; where id=${game.data[0].cover};`)
	// gameToSave.cover =
	gameToSave.artworks = await getMultipleData(game.data[0].artworks, 'artworks')
	gameToSave.game_modes = await getMultipleData(game.data[0].game_modes, 'game_modes')
	gameToSave.genres = await getMultipleData(game.data[0].genres, 'genres')
	gameToSave.platforms = await getMultipleData(game.data[0].platforms, 'platforms')
	gameToSave.name = game.data[0].name
	gameToSave.summary = game.data[0].summary
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
				'user-key': '40bd81ee538daaccdcb30cb5aba695af'
			},
			data: data
		})
	} catch (error) {
		console.error(error)
	}
}

// getGameDataFromApiAndSave(darksouls).then((game) => console.log(game))
module.exports = {
	fetchAndSaveGame: getGameDataFromApiAndSave
}
