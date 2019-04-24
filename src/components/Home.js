import React from 'react'
import Slider from './common/Slider'

class Home extends React.Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <section className="hero is-success is-fullheight  ">
                    <div className="hero-body">
                        <div className="container is-centered">
                            <h1 className="title is-1">
                                Welocme to G-Link
                            </h1>
                            <h2 className="subtitle is-3">
                                A community for gamers
                            </h2>
                        </div>
                    </div>
                </section>
                <Slider title={"Hottest Game right now"} />
                <section className="hero is-info is-large">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Large title
                             </h1>
                            <h2 className="subtitle">
                                Large subtitle
                             </h2>
                        </div>
                    </div>
                </section>

                <Slider title={"Popular Streamers"} />

                <section className="hero is-info is-large">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Large title
      </h1>
                            <h2 className="subtitle">
                                Large subtitle
      </h2>
                        </div>
                    </div>
                </section>



                <section className="hero is-info is-large">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Large title
      </h1>
                            <h2 className="subtitle">
                                Large subtitle
      </h2>
                        </div>
                    </div>
                </section>



                <section className="hero is-info is-large">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Large title
      </h1>
                            <h2 className="subtitle">
                                Large subtitle
      </h2>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home