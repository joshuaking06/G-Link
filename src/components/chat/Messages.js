import React from 'react'
import ChatRoom from './ChatRoom'
import Inbox from './Inbox'
const messages = [{
    "user": [
        {
            "_id": "5cb51949c94e70535a38a039",
            "email": "hi1",
            "username": "lorasdd"
        },
        {
            "_id": "5cb5174249414f4e9dec2709",
            "email": "hi",
            "username": "lord"
        }
    ],
    "_id": "5cb727fc08b7103341940946"
}, {
    "user": [
        {
            "_id": "5cb51949c94e70535a38a039",
            "email": "hi1",
            "username": "lorasdd"
        },
        {
            "_id": "5cb5174249414f4e9dec2709",
            "email": "hi",
            "username": "lord"
        }
    ],
    "_id": "5cb727fc08b7103341940946"
}, {
    "user": [
        {
            "_id": "5cb51949c94e70535a38a039",
            "email": "hi1",
            "username": "lorasdd"
        },
        {
            "_id": "5cb5174249414f4e9dec2709",
            "email": "hi",
            "username": "lord"
        }
    ],
    "_id": "5cb727fc08b7103341940946"
}, {
    "user": [
        {
            "_id": "5cb51949c94e70535a38a039",
            "email": "hi1",
            "username": "lorasdd"
        },
        {
            "_id": "5cb5174249414f4e9dec2709",
            "email": "hi",
            "username": "lord"
        }
    ],
    "_id": "5cb727fc08b7103341940946"
}, {
    "user": [
        {
            "_id": "5cb51949c94e70535a38a039",
            "email": "hi1",
            "username": "lorasdd"
        },
        {
            "_id": "5cb5174249414f4e9dec2709",
            "email": "hi",
            "username": "lord"
        }
    ],
    "_id": "5cb727fc08b7103341940946"
}, {
    "user": [
        {
            "_id": "5cb51949c94e70535a38a039",
            "email": "hi1",
            "username": "lorasdd"
        },
        {
            "_id": "5cb5174249414f4e9dec2709",
            "email": "hi",
            "username": "lord"
        }
    ],
    "_id": "5cb727fc08b7103341940946"
}, {
    "user": [
        {
            "_id": "5cb51949c94e70535a38a039",
            "email": "hi1",
            "username": "lorasdd"
        },
        {
            "_id": "5cb5174249414f4e9dec2709",
            "email": "hi",
            "username": "lord"
        }
    ],
    "_id": "5cb727fc08b7103341940946"
}, {
    "user": [
        {
            "_id": "5cb51949c94e70535a38a039",
            "email": "hi1",
            "username": "lorasdd"
        },
        {
            "_id": "5cb5174249414f4e9dec2709",
            "email": "hi",
            "username": "lord"
        }
    ],
    "_id": "5cb727fc08b7103341940946"
}, {
    "user": [
        {
            "_id": "5cb51949c94e70535a38a039",
            "email": "hi1",
            "username": "lorasdd"
        },
        {
            "_id": "5cb5174249414f4e9dec2709",
            "email": "hi",
            "username": "lord"
        }
    ],
    "_id": "5cb727fc08b7103341940946"
}, {
    "user": [
        {
            "_id": "5cb51949c94e70535a38a039",
            "email": "hi1",
            "username": "lorasdd"
        },
        {
            "_id": "5cb5174249414f4e9dec2709",
            "email": "hi",
            "username": "lord"
        }
    ],
    "_id": "5cb727fc08b7103341940946"
}


]

class Messages extends React.Component {

    render() {
        return (
            <section className="section has-margin">
                <div className="container container-full-screen" >
                    <h2 className="title is-4">Messaging</h2>
                    <div className="columns Messaging">
                        <div className="column is-one-third">
                            <h3 className="title is-5">Recent</h3>
                            <div className="inbox">
                                {messages.map((number, index) =>
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