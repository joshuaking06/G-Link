const gameresolver = require('./index.js')

let baca

gameresolver.fetchAndSaveGame('2155').then((res) => {
	baca = res
	console.log(baca)
})
