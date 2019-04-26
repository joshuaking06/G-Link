import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom'

import ImageCard from './ImageCard'



const Slider = ({ title, data }) => {
    // const data = {
    //     currentIndex: 0,
    //     itemsInSlide: 1,
    { console.log(data) }

    const responsive = {
        0: {
            items: 1
        },
        767: {
            items: 2

        },
        1024: {
            items: 4
        }
    }
    const items = [<div className="column">
        <ImageCard />
    </div>, <div className="column">
        <ImageCard />
    </div>, <div className="column">
        <ImageCard />
    </div>, <div className="column">
        <ImageCard />
    </div>, <div className="column">
        <ImageCard />
    </div>,
    <div className="column has-button">
        <Link className="button is-primary" to="/"> View More</Link>
    </div>]

    return (
        <section className="section" >
            <div className="container is-set-to-zero container-full-screen">
                <h2 className="title is-4">{title}</h2>
                <div className="columns">
                    <AliceCarousel
                        items={items}
                        responsive={responsive}
                        dotsDisabled={true}
                        infinite={false}
                    />
                </div>
            </div>

        </section >
    )
    // }
}


export default Slider
