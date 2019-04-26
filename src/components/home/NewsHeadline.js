import React from 'react'

// import NewsSection from './ImageCard'
const NewsHeadline = () => {
    // console.log(title)
    return (
        <article className="media">
            <figure className="media-left">
                <img className="img" src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
            <div className="media-content ">
                <div className="content">
                    <h3 className="title is-5"><strong>John Smith</strong></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.

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