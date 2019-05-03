import React from 'react'
import NewsSection from '../home/NewsSection'
import axios from 'axios'

// https://images.alphacoders.com/942/thumb-1920-942234.jpg SEKIRO

class News extends React.Component {
	constructor() {
		super()
		this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount() {
		const queryString = `query{
											getNews(query: "q=games&q=game&q=gaming&q=video game"){
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
		axios
			.post('/api/graphql', { query: queryString })
			.then((data) => this.setState(data.data.data))
	}
	handleScroll(e) {
		console.log('here2')

		// let element = e.target
		// if (element.scrollHeight - element.scrollTop === element.clientHeight) {
		// 	// do something at end of scroll
		// 	console.log('here')
		// }
	}

	render() {
		if (!this.state) {
			return <h1>Loading....</h1>
		}
		return (
			<div >
				<section className="section has-margin">
					<div className="container container-full-screen" >
						<h2 className="title is-4">Gaming News</h2>
						<NewsSection news={this.state.getNews} scrollEvent={this.handleScroll} />
						{/* //.filter(elemn => (elemn.content || elemn.title)	.replace(/[a-zA-Z\s,.1-9&\/\\#,+()$~%.'":*?<>{}[(.*?)\]]/gmi, '') !== '...')} /> */}

					</div>
				</section>
			</div>

		)
	}
}

export default News


		//(games OR gaming OR game)
