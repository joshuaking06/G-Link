import React from 'react'
import { Link } from 'react-router-dom'



import NewHeadline from './NewsHeadline'
const NewsSection = ({ news, clickEvent }) => {
    // console.log(news)
    return (
        <div className="news">
            {news.map((elem, index) => <NewHeadline key={index} {...elem} />)}
            <div className="is-centered">
                {(news.length === 5 && <Link className="button  is-success" to="/news"> View More News</Link>)

                    ||
                    <Link className="button  is-success" onClick={clickEvent} to="/news"> View More News</Link>}

            </div>


        </div>
    )
}


export default NewsSection