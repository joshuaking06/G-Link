import React from 'react'
import { Link } from 'react-router-dom'

// import NewsSection from './ImageCard'
const NewsHeadline = ({ title, content, urlToImage, publishedAt, source, url }) => {
    return (
        <article className="media home-media">
            <figure className="media-left">
                <img className="img" src={urlToImage} />
            </figure>
            <div className="media-content ">
                <div className="content">
                    <h3 className="title is-5"><strong>{title}</strong></h3>
                    <p>
                        {content && content.replace(/\[(.*?)\]/gi, '')}
                        {content && <a href={url} target="_blank"> Read more</a>}
                        {!content && <a href={url} target="_blank">See the cotent</a>}

                    </p>
                    <p>publised at: {publishedAt}  by: {source.name} </p>
                </div>
                {/* <nav className="level is-mobile">
	// console.log(title)
	return (
		<article className="media home-media">
			<figure className="media-left">
				<img className="img" src="https://bulma.io/images/placeholders/128x128.png" />
			</figure>
			<div className="media-content ">
				<div className="content">
					<h3 className="title is-5">
						<strong>John Smith</strong>
					</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna
						eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam
						finibus odio quis feugiat facilisis. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum
						ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros,
						eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus
						odio quis feugiat facilisis.
					</p>
				</div>
				{/* <nav className="level is-mobile">
                    <div className="level-left">
                        <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-reply"></i></span>
                        </a>
                        <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                        </a>
                        <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-heart"></i></span>
                        </a>
                    </div>
                </nav> */}
            </div>
        </article>
    )
}

export default NewsHeadline
