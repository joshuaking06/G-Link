const axios = require('axios')
const darksouls = '2155'

const fields = {
	cover: 'fields alpha_channel,animated,game,height,image_id,url,width;',
	games:
		'fields cover, summary, slug, similar_games, screenshots, id, rating, rating_count,platforms, player_perspectives, genres, game_modes, dlcs, artworks, name, url, videos; exclude tags;'
}

// create and build up a new game object which will be saved to the database
const getGameDataFromApiAndSave = async (gameId) => {
	const gameToSave = {}
	const game = await getSingleData('games', fields.games + `where id=${gameId};`)

	console.log(game.data[0].cover)
	gameToSave.artworks = await getMultipleData(game.data[0].artworks, 'artworks')
	gameToSave.name = game.data[0].name
	gameToSave.summary = game.data[0].summary
	gameToSave.url = game.data[0].url
	return gameToSave
}

const getMultipleData = (ids, endpoint) => {
	try {
		return Promise.all(
			ids.map(async (i) => {
				const single = await getSingleData(
					endpoint,
					`fields alpha_channel,animated,game,height,image_id,url,width;where id=${i};`
				)
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
