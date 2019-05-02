const axios = require('axios')
require('dotenv').config()

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
    },
    getNews: async (args) => {
        try {
            const results = await axios({
                url: `https://newsapi.org/v2/top-headlines?${args}&category=technology&category=entertainment`,
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'x-api-key': process.env.NEWS_API_KEY
                }
            })
            // console.log(results)
            return await results.data.articles
        } catch (err) {
            console.log(err)
        }
    }
}
