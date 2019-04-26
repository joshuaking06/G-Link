import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom'

import ImageCard from './ImageCard'



const Slider = ({ title, data }) => {
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
    // console.log([] || undefined)
    // const items = data.indexGame || []
    const items = data.indexGame.map(elem =>
        <div className="column">
            <ImageCard name={elem.name} image={`https://images.igdb.com/igdb/image/upload/t_cover_big/${elem.cover.image_id || "nocover_qhhlj6"}.jpg`} />
        </div>
    )
    items.push(<div className="column has-button"><Link className="button is-primary" to="/"> View More</Link></div >)

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
