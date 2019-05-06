import React from 'react'
import Message from './Message'
// const messages = [1]
// const socket = require('socket.io-client')(`http://localhost:4000`);

class ChatRoom extends React.Component {
    constructor() {
        super()
        this.state = {
            message: 'dd',
            messages: [{ "_id": "5cb727fc08b7103341940947", "text": "hello" }]
        }
        this.handleSumbit = this.handleSumbit.bind(this)

        global.socket.on('connect', function () {
            console.log('connected')

        })

        global.socket.on('RECEIVE_MESSAGE', (msg) => {
            console.log(this.state.messages)
            const messages = [...this.state.messages, msg]

            this.setState({ ...this.state, messages })
        }
        )

    }
    handleSumbit(e) {
        e.preventDefault()
        global.socket.emit('chat message', 'sending')
    }

    render() {
        return (
            <div className="column">
                <div className="inbox">
                    {this.state.messages.map((elemn, index) =>
                        // console.log(elemn)
                        < Message key={index}  {...elemn} />
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