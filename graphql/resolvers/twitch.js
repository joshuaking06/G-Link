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

    //country=au&country=ca&country=gb&country=ie&country=nz&country=ph&country=in&country=sa&country=sg&country=us&country=za
    getNews: async (args) => {
        try {
            const results = await axios({
                url: `https://newsapi.org/v2/top-headlines?${args.query}&category=technology&category=entertainmentt&category=general`,
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'x-api-key': process.env.NEWS_API_KEY
                }
            })
            return await [...new Set(results.data.articles.map(o => JSON.stringify(o)))].map(s => JSON.parse(s))

        } catch (err) {
            console.log(err)
        }
    },
    getGameNews: async (args) => {
        try {
            const results = await axios({
                url: `https://newsapi.org/v2/everything?q="${args.query}"&sortBy=publishedAt`,
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'x-api-key': process.env.NEWS_API_KEY
                }
            })
            return await [...new Set(results.data.articles.map(o => JSON.stringify(o)))].map(s => JSON.parse(s))

        } catch (err) {
            console.log(err)
        }
    }
}
