import React from 'react'
const Message = ({ _id, text }) => {
    return (
        <div className="message">
            <p>{text}</p>
        </div>
    )
}

export default Message