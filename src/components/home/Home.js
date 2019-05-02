import React from 'react'
import Slider from './Slider'
import NewsSection from './NewsSection'
import { Parallax } from 'react-parallax'
import axios from 'axios'

// https://images.alphacoders.com/942/thumb-1920-942234.jpg SEKIRO

class Home extends React.Component {
	constructor() {
		super()
	}

	componentDidMount() {
		const queryString = `query{
                indexGame{
                  name
                  id
                  cover{
                    image_id
                  }
                },
                    popularStreamers{
                        user_name
                      viewer_count
                      thumbnail_url
											},
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
		if (!this.state) {
			return <h1>Loading....</h1>
		}
		return (
			<div>
				<section className="hero home-hero is-fullheight  ">
					<div className="hero-body">
						<div className="container is-centered">
							<h1 className="title is-1">Welcome to G-Link</h1>
							<h2 className="subtitle is-3">A community for gamers</h2>
						</div>
					</div>
				</section>
				<Slider title={'Hottest Game right now'} data={this.state.indexGame} />

				<Parallax
					bgImage="https://www.syfy.com/sites/syfy/files/wire/legacy/Uncharted4-Nathan-Drake.jpg"
					strength={350}
				>
					<section className="hero is-large">
						<div className="hero-body">
							<div className="container">
								<h2 className="title is-4 is-white is-centered">Explore</h2>
							</div>
						</div>
					</section>
				</Parallax>

				<Slider title={'Popular Streamers'} data={this.state.popularStreamers} />

				<Parallax
					bgImage="https://www.gamersclassified.com/wp-content/uploads/2018/11/Is-eSports-In-Schools-On-The-Way.jpeg"
					strength={350}
				>
					<section className="hero is-large">
						<div className="hero-body">
							<div className="container">
								<h2 className="title is-4 is-white is-centered">Conenct</h2>
							</div>
						</div>
					</section>
				</Parallax>

				<section className="section">
					<div className="container is-set-to-zero container-full-screen">
						<h2 className="title is-4">Gaming News</h2>
						<NewsSection news={this.state.getNews.slice(5)} />
					</div>
				</section>

				<Parallax
					bgImage="https://compass-ssl.xbox.com/assets/dc/48/dc486960-701e-421b-b145-70d04f3b85be.jpg?n=Game-Hub_Content-Placement-0_New-Releases-No-Copy_740x417_02.jpg"
					strength={350}
				>
					<section className="hero  is-large">
						<div className="hero-body">
							<div className="container">
								<h2 className="title is-4 is-white is-centered">Play</h2>
							</div>
						</div>
					</section>
				</Parallax>
			</div>
		)
	}
}

export default Home


//(games OR gaming OR game)
