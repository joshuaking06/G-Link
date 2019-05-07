import React from 'react'
import ChatRoom from './ChatRoom'
import Inbox from './Inbox'
import axios from 'axios'

class Messages extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        const queryString = `
            {    
                showIndexChatroom(query: "5cb61d12744c127fb5cd972d"){
                  _id
                  user{_id,username}
                },
                showChatroom(query: "5cd0c69fe262b20c7a356c62"){
                    _id
                    messages{
                        text
                        user
                      }
                }
              }
                    `
        axios
            .post('/api/graphql', { query: queryString })
            .then((data) => this.setState(data.data.data))
    }
    render() {
        if (!this.state) return <h1>loading</h1>
        { console.log(this.state) }
        return (
            <section className="section has-margin">
                <div className="container container-full-screen" >
                    <h2 className="title is-4">Messaging</h2>
                    <div className="columns Messaging">
                        <div className="column is-one-third">
                            <h3 className="title is-5">Recent</h3>
                            <div className="inbox">
                                {this.state.showIndexChatroom.map((number, index) =>
                                    < Inbox key={index} {...number} />
                                )
                                }

                            </div>
                        </div>
                        <ChatRoom />


                    </div>
                </div>
            </section>

        )
    }
}

export default Messages