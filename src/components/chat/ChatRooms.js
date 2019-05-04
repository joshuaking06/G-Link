import React from 'react'

class ChatRoom extends React.Component {

    render() {
        return (
            <section className="section has-margin">
                <div className="container container-full-screen" >
                    <h2 className="title is-4">Messaging</h2>
                    <div className="columns Messaging">
                        <div className="column is-one-third">
                            <h3 className="title is-5">Recent</h3>
                            <div className="inbox">
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="inbox">
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                                <div className="chatroom"></div>
                            </div>
                            <form className="form">
                                <div className="field has-addons">
                                    <p className="control">
                                        <input className="input is-large" type="text" placeholder="Your email" />
                                    </p>
                                    <p className="control">
                                        <a className="button is-link is-outlined is-large">
                                            Send
                                        </a>
                                    </p>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </section>

        )
    }
}

export default ChatRoom