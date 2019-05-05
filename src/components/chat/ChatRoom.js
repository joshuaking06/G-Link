import React from 'react'
import Message from './Message'
const messages = [1]
class ChatRoom extends React.Component {
    constructor() {
        super()
        this.handleSumbit = this.handleSumbit.bind(this)
    }
    handleSumbit(e) {
        e.preventDefault()
        console.log('here')
    }

    render() {
        return (
            <div className="column">
                <div className="inbox">
                    {messages.map((number, index) =>
                        < Message key={index} />
                    )
                    }

                </div>

                <form className="form" onSubmit={this.handleSumbit}>
                    <div className="field has-addons">
                        <p className="control">
                            <input className="input is-large" type="text" placeholder="Write your message..." />
                        </p>
                        <p className="control">
                            <a className="button is-link is-outlined is-large">
                                Send
                    </a>
                        </p>
                    </div>

                </form>
            </div>)
    }
}

export default ChatRoom