const axios = require('axios')
require('dotenv').config()



// const searchGames = async (queryString) => {
// 	try {
// 		return await axios({
// 			url: 'https://api-v3.igdb.com/games',
// 			method: 'POST',
// 			headers: {
// 				Accept: 'application/json',
// 				'user-key': process.env.USER_KEY
// 			},
// 			data: queryString
// 		})
// 	} catch (err) {
// 		console.log(err)
// 	}
// }

// console.log(process.env.TWITCH_KEY)

module.exports = {
    popularStreamers: async () => {
        try {
            const results = await axios({
                url: 'https://api.twitch.tv/helix/streams',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Client-ID': process.env.TWITCH_KEY
                }
            })
            return await results.data.data
        } catch (err) {
            console.log(err)
        }
    }
}
