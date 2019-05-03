import React from 'react'
import axios from 'axios'
import GameResultCard from './GameResultCard'
import { Link } from 'react-router-dom'

export default class Search extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			index: 1,
			keyword: '',
			filters: {
				platforms: [ 6, 48, 49 ]
			}
		}

		this.changeKeyword = this.changeKeyword.bind(this)
		this.search = this.search.bind(this)
		this.changeFilter = this.changeFilter.bind(this)
		this.getMore = this.getMore.bind(this)
	}

	componentDidMount() {
		const keyword = this.props.match.params.query || ''
		this.setState({ keyword }, () => this.search())
	}

	changeFilter() {
		console.log('changing filter array')
	}

	changeKeyword({ target: { value, name } }) {
		this.setState({ [name]: value })
	}

	convertFilters(array) {
		return array.join(',')
	}

	getMore() {
		this.setState({ index: this.state.index + 10 })
		this.search(null, this.state.index + 10)
	}

	search(e, givenIndex) {
		if (e) e.preventDefault()
		const { keyword, index, filters: { platforms } } = this.state
		const newIndex = givenIndex || index
		const platformString = this.convertFilters(platforms)

		const queryString = `query{ searchGames(
			query: "search \\"${keyword}\\"; fields name, cover.url; where platforms=(${platformString}) & version_parent = null; limit 10; offset ${newIndex};",
			){ name, id, cover{ url } }}`

		console.log(queryString, 'queryString')

		axios.post('/api/graphql', { query: queryString }).then((data) => {
			if (!givenIndex) {
				console.log(data.data.data, 'data')
				this.setState({ results: data.data.data.searchGames })
			}
			if (givenIndex)
				this.setState({ results: [ ...this.state.results, ...data.data.data.searchGames ] })
		})
	}

	render() {
		const { keyword, filters, index } = this.state
		return (
			// hero banner
			<div className="search-page">
				<div className="container">
					<section className="search-hero hero is-small is-centered">
						<div className="hero-body">
							<div className="container">
								<h1 className="title is-1">Search</h1>
							</div>
						</div>
					</section>
				</div>
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
				{/* search results */}
				<div className="container">
					{this.state.results && (
						<div className="columns is-multiline">
							{this.state.results.map((game) => (
								<Link
									to={`/games/${game.id}`}
									key={game.id}
									className="column is-8"
								>
									<GameResultCard game={game} />
								</Link>
							))}
						</div>
					)}
					{this.state.results &&
					this.state.results.length % 10 === 0 && (
						<button onClick={this.getMore} className="button is-link is-outlined">
							Load More
						</button>
					)}
				</div>
			</div>
		)
	}
}
