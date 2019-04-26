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
    }
}
