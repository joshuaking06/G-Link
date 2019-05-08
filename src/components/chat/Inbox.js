import React from 'react'
let username
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

const Inbox = ({ data }) => {

    const { _id, user } = data
    username = user.filter(elemn => elemn._id !== Auth.getUserID())
    return (
        <Link to={`/messages/${_id}/show`} className={_id}>

            <div className="media inbox-users">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" />
                    </p>
                </figure>
                <div className="media-content">
                    <div className='content'>
                        <p>{username[0].username}
                            <br />
                            I am onlnie
                    </p>
                    </div>
                </div>

            </div>
        </Link >
    )
}

export default Inbox
