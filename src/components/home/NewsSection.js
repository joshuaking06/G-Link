import React from 'react'
import { Link } from 'react-router-dom'



import NewHeadline from './NewsHeadline'
const NewsSection = ({ news }) => {
    console.log(news[0])
    return (
        <div className="news">
            {news.map((elem, index) => <NewHeadline key={index} {...elem} />)}
            {/* <NewHeadline />
            <NewHeadline />
            <NewHeadline />
            <NewHeadline /> */}
            <div className="is-centered">
                <Link className="button  is-success" to="/"> View More News</Link>
            </div>

        </div>
    )
}


export default NewsSection