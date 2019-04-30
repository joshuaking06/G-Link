import React from 'react'
import axios from 'axios'
import GameResultCard from './GameResultCard'

// const platforms = {
// 	pc: 6,
// 	ps4: 48,
// 	xbox: 49,
// 	switch: 130
// }

export default class Search extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			keyword: '',
			filters: {
				platforms: [ 6, 48, 49 ]
			}
		}

		this.changeKeyword = this.changeKeyword.bind(this)
		this.search = this.search.bind(this)
		this.changeFilter = this.changeFilter.bind(this)
	}

	changeFilter() {
		console.log('changing')
	}

	changeKeyword({ target: { value, name } }) {
		this.setState({ [name]: value })
	}

	convertFilters(array) {
		return array.join(',')
	}

	search(e) {
		e.preventDefault()
		const { keyword, filters: { platforms } } = this.state
		const platformString = this.convertFilters(platforms)
		const queryString = `query{ searchGames(
			query: "search \\"${keyword}\\"; fields name, cover.url; where platforms=(${platformString}) & version_parent = null; limit 20;",
			){ name, id, cover{ url } }}`
		console.log(queryString)
		axios
			.post('/api/graphql', { query: queryString })
			.then((data) => this.setState({ results: data.data.data.searchGames }))
	}

	render() {
		const { keyword, filters } = this.state
		return (
			<div className="search-page">
				<section className="search-hero hero is-medium">
					<div className="hero-body">
						<div className="container">
							<h1 className="title is-1">Search</h1>
						</div>
					</div>
				</section>
				<section className="search-section section">
					<div className="container">
						<form onSubmit={this.search} className="form columns">
							<div className="field column is-5">
								<p className="control">
									<input
										onChange={this.changeKeyword}
										className="input is-large"
										placeholder="Enter search term..."
										name="keyword"
										value={keyword}
									/>
								</p>
							</div>
						</form>
					</div>
				</section>
				<div className="container">
					{this.state.results && (
						<div className="columns is-multiline">
							{this.state.results.map((game) => (
								<GameResultCard key={game.id} game={game} />
							))}
						</div>
					)}
				</div>
			</div>
		)
	}
}
