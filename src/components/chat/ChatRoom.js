import React from 'react'
import Message from './Message'
// const messages = [1]
class ChatRoom extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: [1]
        }
        this.handleSumbit = this.handleSumbit.bind(this)
    }
    handleSumbit(e) {
        e.preventDefault()
        global.socket.emit('chat message', 'here')
        const messages = [...this.state.messages, 9]
        global.socket.on('chat message', this.setState({ ...this.state, messages }))
    }

    render() {
        return (
            <div className="column">
                <div className="inbox">
                    {this.state.messages.map((number, index) =>
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
                            <button className="button is-link is-outlined is-large">
                                Send
                    </button>
                        </p>
                    </div>

                </form>
            </div>)
    }
}

export default ChatRoom