import React from 'react'
import { Link } from 'react-router-dom'



import NewHeadline from './NewsHeadline'
const NewsSection = () => {
    // console.log(title)
    return (
        <div className="news">
            <NewHeadline />
            <NewHeadline />
            <NewHeadline />
            <NewHeadline />
            <div className="is-centered">
                <Link className="button  is-success" to="/"> View More News</Link>
            </div>

        </div>
    )
}


export default NewsSection