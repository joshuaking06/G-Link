import React from 'react'
import Message from './Message'

const ChatRoom = ({ data, handleSumbitEvent, handleChangeEvent, message, handleScroll, scrollBottom }) => {
    const { _id, messages } = data
    return (
        <div className="column">
            <div className="inbox" onScroll={handleScroll} onChange={handleScroll}>
                {messages && messages.map((elemn, index) =>
                    < Message key={index}  {...elemn} />
                )
                }
                {scrollBottom}
            </div>

            <form className="form" onSubmit={handleSumbitEvent}>
                <div className="field has-addons">
                    <p className="control">
                        <input className="input is-large" name="message" type="text" placeholder="Write your message..." onChange={handleChangeEvent} value={message || ''} />
                    </p>
                    <p className="control">
                        <button className="button is-link is-outlined is-large">
                            Send
                        </button>
                    </p>
                </div>

            </form>
        </div>)
}

export default ChatRoom
