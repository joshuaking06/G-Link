import React from 'react'
import Message from './Message'

class ChatRoom extends React.Component {
    constructor() {
        super()
        this.state = {
            message: '',
            messages: [{ "_id": "5cb727fc08b7103341940947", "text": "hello" }]
        }
        this.handleSumbit = this.handleSumbit.bind(this)
        this.handleChange = this.handleChange.bind(this)

        global.socket.on('connect', function () {
            console.log('connected')

        })

        global.socket.on('RECEIVE_MESSAGE', (msg) => {
            const messages = [...this.state.messages, msg]
            this.setState({ ...this.state, messages })
        }
        )
    }


    handleChange({ target: { name, value } }) {
        this.setState({ ...this.state, [name]: value })
    }

    handleSumbit(e) {
        e.preventDefault()
        global.socket.emit('chat message', { "_id": "5cb727fc08b7103341940947", "text": this.state.message })
        this.setState({ ...this.state, message: '' })

    }

    render() {
        { console.log(this.state) }
        return (
            <div className="column">
                <div className="inbox">
                    {this.state.messages.map((elemn, index) =>

                        < Message key={index}  {...elemn} />
                    )
                    }

                </div>

                <form className="form" onSubmit={this.handleSumbit}>
                    <div className="field has-addons">
                        <p className="control">
                            <input className="input is-large" name="message" value={this.state.message} onChange={this.handleChange} type="text" placeholder="Write your message..." />
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