import React from 'react'
import ChatRoom from './ChatRoom'
import Inbox from './Inbox'
import axios from 'axios'
import Auth from '../../lib/Auth'
class Messages extends React.Component {
    constructor() {
        super()
        this.state = {
            pageId: '',
            showChatroom: [],
            showIndexChatroom: []
        }
        this.handleSumbit = this.handleSumbit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleScroll = this.handleScroll.bind(this)

        global.socket.on('RECEIVE_MESSAGE', (msg) => {
            if (msg._id === this.props.match.params.id) {
                const messages = [...this.state.showChatroom.messages, msg.messages[0]]
                const showChatroom = { ...this.state.showChatroom, messages }
                this.setState({ ...this.state, showChatroom })
                this.scrollToBottom();
            }

        }

        )
    }
    componentDidMount() {
        if (Auth.isAuthenticated()) {
            const queryString = `
            {    
                showIndexChatroom(query: "${Auth.getUserID()}"){
                  _id
                  user{_id,username}
                }
              }   
              `
            axios
                .post('/api/graphql', { query: queryString })
                .then((data) => this.setState(data.data.data))
        }

    }


    componentDidUpdate() {
        if (this.state.pageId !== this.props.match.params.id && this.props.match.params.id) {
            const queryString = `
            {    
                showChatroom(query: "${this.props.match.params.id}"){
                    _id
                    messages{
                        text
                        user
                        createdAt
                      }
                }
              }
                    `
            axios
                .post('/api/graphql', { query: queryString })
                .then((data) => {
                    const lol = data.data.data.showChatroom
                    this.setState({ ...this.state, showChatroom: lol, pageId: this.props.match.params.id })
                    this.scrollToBottom();
                })

        }

    }


    handleSumbit(e) {
        e.preventDefault()
        if (this.state.message) {
            global.socket.emit('chat message', { chatId: this.props.match.params.id, message: { "user": Auth.getUserID(), "text": this.state.message } })
            this.setState({ ...this.state, message: '' })
        }
    }

    handleChange({ target: { name, value } }) {
        this.setState({ ...this.state, [name]: value })
    }

    handleScroll(e) {
        // console.log('here')
        // this.el.scrollIntoView();
        // console.log(e)
        // console.log(this.el.scrollHeight)
        // console.log(this.el.scrollTop)
        // this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight

    }
    scrollToBottom() {
        this.el.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" });
        this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight
        // console.log(this.el.offsetTop)
        // console.log(this.el.scrollTop)
        // console.log(this.el.offsetHeight)
        // // console.log(this.el.scrollHeight)
        // console.log(this.el.clientHeight)

        // window.scrollTo(1888);

        // this.el.scrollTop = 1888

        // this.shouldScrollBottom = this.el.scrollTop +
        //     this.el.offsetHeight === this.el.scrollHeight;

    }


    render() {
        if (!this.state.showIndexChatroom) return <h1>loading</h1>
        return (
            <section className="section has-margin">
                <div className="container container-full-screen" >
                    <h2 className="title is-4">Messaging</h2>
                    <div className="columns Messaging">
                        <div className="column is-one-third">
                            <h3 className="title is-5">Recent</h3>
                            <div className="inbox">
                                {this.state.showIndexChatroom.map((number, index) =>
                                    < Inbox key={index} data={number} handleClick={this.handleClick} />
                                )
                                }

                            </div>
                        </div>

                        <ChatRoom
                            data={this.state.showChatroom}
                            handleSumbitEvent={this.handleSumbit}
                            handleChangeEvent={this.handleChange}
                            message={this.state.message}
                            handleScroll={this.handleScroll}
                            testing={<div ref={el => { this.el = el; }} className="testing" />}
                        />
                    </div>
                </div>
            </section>

        )
    }
}

export default Messages