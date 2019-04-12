const axios = require('axios')
const darksouls = '2155'

function getGameDataFromApiAndSave(gameId) {
	axios({
		url: 'https://api-v3.igdb.com/games',
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'user-key': '40bd81ee538daaccdcb30cb5aba695af'
		},
		data: `fields cover, summary, slug, similar_games, screenshots, 
            id, rating, rating_count,platforms, player_perspectives, 
            genres, game_modes, dlcs, artworks, name, url, videos ; 
            where id = ${gameId}; exclude tags;`
	})
		.then((response) => {
			console.log(response.data)
		})
		.catch((err) => {
			console.error(err)
		})
}

getGameDataFromApiAndSave(darksouls)
