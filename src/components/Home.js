import React from 'react'
import Slider from './common/Slider'
import NewsSection from './common/NewsSection'
import { Parallax } from "react-parallax";
const image1 =
    "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
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
                                Welcome to G-Link
                            </h1>
                            <h2 className="subtitle is-3">
                                A community for gamers
                            </h2>
                        </div>
                    </div>
                </section>
                <Slider title={"Hottest Game right now"} />

                <Parallax bgImage="https://www.syfy.com/sites/syfy/files/wire/legacy/Uncharted4-Nathan-Drake.jpg" strength={350}>
                    <section className="hero  is-large">
                        <div className="hero-body">
                            <div className="container">
                                <h2 className="title is-4 is-white">
                                    Explore
                             </h2>

                            </div>
                        </div>
                    </section>
                </Parallax>

                <Slider title={"Popular Streamers"} />

                <Parallax bgImage="https://www.gamersclassified.com/wp-content/uploads/2018/11/Is-eSports-In-Schools-On-The-Way.jpeg" strength={350}>
                    <section className="hero is-large">
                        <div className="hero-body">
                            <div className="container">
                                <h2 className="title is-4 is-white">
                                    Conenct
                             </h2>

                            </div>
                        </div>
                    </section>
                </Parallax>



                <section className="section">
                    <div className="container is-set-to-zero container-full-screen">
                        <h2 className="title is-4">
                            Gaming News
                        </h2>
                        <NewsSection />
                    </div>
                </section>



                <Parallax bgImage="https://compass-ssl.xbox.com/assets/dc/48/dc486960-701e-421b-b145-70d04f3b85be.jpg?n=Game-Hub_Content-Placement-0_New-Releases-No-Copy_740x417_02.jpg" strength={350}>
                    <section className="hero  is-large">
                        <div className="hero-body">
                            <div className="container">
                                <h2 className="title is-4 is-white">
                                    Play
                                </h2>

                            </div>
                        </div>
                    </section>
                </Parallax>
            </div>
        )
    }
}

export default Home