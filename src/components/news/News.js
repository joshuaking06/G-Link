import React from 'react'
import NewsSection from './NewsSection'
import axios from 'axios'

// https://images.alphacoders.com/942/thumb-1920-942234.jpg SEKIRO

class News extends React.Component {
	constructor() {
		super()
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

	render() {
		return (<h1>here</h1>)
	}
}

export default News


		//(games OR gaming OR game)
