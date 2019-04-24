import React from 'react'

import ImageCard from './ImageCard'
const Slider = ({ title }) => {
    return (
        <section className="section">
            <div className="container is-set-to-zero container-full-screen">
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
