import Auth from './Auth'

class WebSocket {
    // get users id from the payload, to be used when checking if able to delete comments
    static testing() {
        // global.socket = socket
        this.socket = require('socket.io-client')(`http://localhost:4000`);
        console.log(this.socket)
        // console.log(urlParams)
    }
    static sendMessage(id, message) {
        // console.log(this.socket)
        this.socket.emit('chat message', { chatId: id, message: { "user": Auth.getUserID(), "text": message } })
    }
    static printMessage(id) {
        console.log(this.socket)
        this.socket.on('RECEIVE_MESSAGE', (msg) => {
            console.log(msg)
            if (msg._id === id) {
                console.log('herer mate')
                // const messages = [...this.state.showChatroom.messages, msg.messages[0]]
                // const showChatroom = { ...this.state.showChatroom, messages }
                return showChatroom
                // this.setState({ ...this.state, showChatroom })
                // if (this.shouldScroll || msg.messages[0].user === Auth.getUserID()) {
                //     this.scrollToBottom('smooth')
                // }
            }

        }

        )
    }

}


export default WebSocket