import React from 'react'

const ImageCard = ({ name, image, viewers }) => {
    // image_id
    { console.log(image) }
    if (typeof image === "object") image = `https://images.igdb.com/igdb/image/upload/t_cover_big/${image.image_id || "nocover_qhhlj6"}.jpg`

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by5">
                    <img src={image.replace(/{width}|{height}/gi, '720')} alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">

                <div className="content">
                    <h3 className="subtitle is-6">
                        {name}
                        <span> {viewers}</span>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default ImageCard
