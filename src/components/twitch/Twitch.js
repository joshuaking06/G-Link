import React from 'react'
const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class Twitch extends React.Component {

    constructor() {
        super()
        this.state = {
            targetID: 'twitch-embed',
            allowfullscreen: true,
            theme: "dark",
        }
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.setAttribute(
            'src',
            EMBED_URL
        );
        script.addEventListener('load', () => {
            this.embed = new window.Twitch.Embed('twitch-embed', { ...this.state, channel: this.props.match.params.twitchstreamer });
        });
        document.body.appendChild(script);
    }
    render() {
        // { console.log(this.state) }
        return (
            <section className="section has-margin">
                <div id='twitch-embed'></div>
            </section>
        )
    }
}

export default Twitch
