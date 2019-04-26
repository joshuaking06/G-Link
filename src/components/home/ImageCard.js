import React from 'react'

const ImageCard = () => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by5">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">

                <div className="content">
                    <h3 className="subtitle is-6">
                        A community for gamers
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default ImageCard
