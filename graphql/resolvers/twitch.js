

module.exports = {
    popularStreamers: async (args) => {
        try {
            // const results = await gameHelper.searchGames(query)
            return { ...args }
            console.log('here')
            // return results.data
        } catch (err) {
            throw err
        }
    }
}
