import React from 'react'
import AliceCarousel from 'react-alice-carousel';

import ImageCard from './ImageCard'
// const Slider = ({ title }) => {

class Slider extends React.Component {
    constructor() {
        super()

        this.items = [1, 2, 3, 4, 5, <button>helo</button>]

        this.state = {
            currentIndex: 0,
            itemsInSlide: 1,
            responsive: {
                0: {
                    items: 1
                },
                1024: {
                    items: 4
                }
            },
            galleryItems: [<div className="column">
                <ImageCard />
            </div>, <div className="column">
                <ImageCard />
            </div>, <div className="column">
                <ImageCard />
            </div>, <div className="column">
                <ImageCard />
            </div>, <div className="column">
                <ImageCard />
            </div>, <div className="column"><button>helo</button></div>]
        }


        this.responsive = {
            0: { items: 1 },
            1024: { items: 4 }
        }

        // this.handleOnSlideChange = this.handleOnSlideChange.bind(this);

    }
    render() {
        const { galleryItems, responsive, currentIndex } = this.state

        return (
            <section className="section" >
                <div className="container is-set-to-zero container-full-screen">
                    <h2 className="title is-4">{this.props.title}</h2>
                    {/* <div className="columns">
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

                    </div> */}
                    <div className="columns">
                        <AliceCarousel
                            items={galleryItems}
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
