const axios = require('axios')


module.exports = {
    popularStreamers: async (args) => {
        try {
            // const results = await gameHelper.searchGames(query)
            console.log('here')

            return { ...args }
            // console.log('here')
            // return results.data
        } catch (err) {
            throw err
        }
    }
}
