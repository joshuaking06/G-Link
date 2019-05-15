import React from 'react'
const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class Twitch extends React.Component {

    constructor() {
        super()
        this.state = {
            targetID: 'twitch-embed',
            width: '940',
            height: '480',
            channel: 'monstercat',
            allowfullscreen: true,
            theme: "dark"

        }
    }

    // componentDidMount() {
    //     let embed;
    //     const script = document.createElement('script');
    //     script.setAttribute(
    //         'src',
    //         EMBED_URL
    //     );
    //     // embed = new window.Twitch.Embed('twitch-embed', { ...this.props })
    //     script.addEventListener('load', () => {
    //         embed = new window.Twitch.Embed('twitch-embed', { ...this.state });
    //     });
    //     document.body.appendChild(script);


    // }
    render() {

        return (

            <div>
                <h1>here</h1>
                <div id='twitch-embed'></div>
            </div>
        )
    }
}

export default Twitch
