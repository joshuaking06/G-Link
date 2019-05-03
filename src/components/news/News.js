import React from 'react'
import NewsSection from '../home/NewsSection'
import axios from 'axios'

class News extends React.Component {
	constructor() {
		super()
		this.handleClickEvent = this.handleClickEvent.bind(this)
		this.state = {
			page: 1
		}
	}

	getQueryString(number) {
		return `query{
			getNews(query: "q=games&q=game&q=gaming&q=video game&page=${number}"){
				title
				url
				urlToImage
				content
				publishedAt
				source{
					name
				}
			}

		}
		`
	}

	componentDidMount() {
		const queryString = this.getQueryString(this.state.page)
		axios
			.post('/api/graphql', { query: queryString })
			.then((data) => this.setState(data.data.data))
	}

	handleClickEvent(e) {
		e.preventDefault()
		const pageNumber = this.state.page + 1
		const queryString = this.getQueryString(pageNumber)
		axios
			.post('/api/graphql', { query: queryString })
			.then((data) => {
				this.setState({ ...this.state, page: pageNumber, getNews: this.state.getNews.concat(data.data.data.getNews) })
			})
	}

	render() {
		if (!this.state.getNews) {
			return <h1>Loading....</h1>
		}
		return (
			<div >
				<section className="section has-margin">
					<div className="container container-full-screen" >
						<h2 className="title is-4">Gaming News</h2>
						<NewsSection news={this.state.getNews} clickEvent={this.handleClickEvent} />
						{/* //.filter(elemn => (elemn.content || elemn.title)	.replace(/[a-zA-Z\s,.1-9&\/\\#,+()$~%.'":*?<>{}[(.*?)\]]/gmi, '') !== '...')} /> */}

					</div>
				</section>
			</div>

		)
	}
}

export default News


		//(games OR gaming OR game)
