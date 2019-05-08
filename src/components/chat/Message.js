import React from 'react'
import moment from 'moment'
import Auth from '../../lib/Auth'

const Message = ({ user, text, createdAt }) => {
    let cssName
    console.log(user)

    console.log(user, Auth.getUserID())
    if (user === Auth.getUserID()) {
        cssName = 'send'
    }

    return (
        <div className="media">
            <div className="media-content">
                <div className={`content message ${cssName}`}>
                    <p>
                        {text}
                    </p>
                </div>
                <p className={`${cssName}`}><small>{moment(new Date(parseInt(createdAt)) || createdAt).format('MMMM Do YYYY, h:mm:ss a')}</small></p>

            </div>

        </div>
    )
}

export default Message