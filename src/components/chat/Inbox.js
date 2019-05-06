
import React from 'react'
let username
const Inbox = ({ _id, user }) => {
    username = user.filter(elemn => elemn._id !== "5cb51949c94e70535a38a039")

    return (
        <div className="media inbox-users">
            <figure className="media-left">
                <p className="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                </p>
            </figure>
            <div className="media-content">
                <div className='content'>
                    <p>{username[0].username}</p>
                </div>
            </div>

        </div>
    )
}

export default Inbox
