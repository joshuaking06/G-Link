import React from 'react'

const ImageCard = () => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by5">
                    <img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_dota2mc_ru-450x300.jpg" alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">

                <div className="content">
                    <h3 className="subtitle is-6">
                        dota2mc_ru
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default ImageCard
