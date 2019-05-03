import React from 'react'
import { Link } from 'react-router-dom'



import NewHeadline from './NewsHeadline'
const NewsSection = ({ news, clickEvent }) => {
    // console.log(news) is-loading
    return (
        <div className="news">
            {news.map((elem, index) => <NewHeadline key={index} {...elem} />)}
            <div className="is-centered">
                {(news.length === 5 && <Link className="button  is-success" to="/news"> View More News</Link>)

                    ||
                    <button onClick={clickEvent} className="button  is-success">
                        Load More
                    </button>
                }

            </div>


        </div>
    )
}


export default NewsSection