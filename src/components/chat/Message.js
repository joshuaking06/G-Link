import React from 'react'
import moment from 'moment'
import Auth from '../../lib/Auth'

const Message = ({ user, text, createdAt }) => {
    let cssName
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
                <p className={`${cssName}`}><small>{moment(new Date(parseInt(createdAt))).format('MMMM Do YYYY, h:mm:ss a')}</small></p>

            </div>

        </div>
    )
}

export default Message