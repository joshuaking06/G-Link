import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom'

import ImageCard from './ImageCard'

class Slider extends React.Component {
    constructor() {
        super()
        this.state = {
            currentIndex: 0,
            itemsInSlide: 1,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2

                },
                1024: {
                    items: 4
                }
            },
            items: [<div className="column">
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
        }
    }
    render() {
        const { items, responsive, currentIndex } = this.state

        return (
            <section className="section" >
                <div className="container is-set-to-zero container-full-screen">
                    <h2 className="title is-4">{this.props.title}</h2>
                    <div className="columns">
                        <AliceCarousel
                            items={items}
                            slideToIndex={currentIndex}
                            responsive={responsive}
                            dotsDisabled={true}
                            infinite={false}
                        />
                    </div>
                </div>

            </section >
        )
    }
}


export default Slider
