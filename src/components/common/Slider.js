import React from 'react'

import ImageCard from './ImageCard'
const Slider = ({ title }) => {
    console.log(title)
    return (
        <section className="section slider">
            <div >
                <h2 className="title is-4">{title}</h2>
                <div className="columns">
                    <div className="column">
                        <ImageCard />
                    </div>
                    <div className="column">
                        <ImageCard />
                    </div>
                    <div className="column">
                        <ImageCard />
                    </div>
                    <div className="column">
                        <ImageCard />
                    </div>
                </div>
            </div>

        </section>
    )
}


export default Slider
