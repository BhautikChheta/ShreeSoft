import React from 'react'
import './About.css'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'

function About() {
    return (
        <div className='about__container'>
            <Navbar />
            <main className="about__wrapper">
                <header>
                    <h1 className="about__title">Who We Are..!!</h1>
                </header>
                <section className="about__cards">
                    <div className="mission_card card_item">
                        <Card
                            header='MISSION'
                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                            path='./images/mission.jpeg'
                        >
                        </Card>
                    </div>
                    <div className="vision_card card_item">
                        <Card
                            header='VISION'
                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                            path='./images/vision2.jpeg'
                        >
                        </Card>
                    </div>
                    <div className="values_card card_item">
                        <Card
                            header='VALUES'
                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                            path='./images/values.jpeg'
                        >
                        </Card>
                    </div>
                </section>
                <hr />
                <section className="who_we_are_wrapper">
                    <div className="story_container">
                        <div className="story_heading">
                            <h2>Our Story!!</h2>
                        </div>
                        <div className="paras">
                            <p className="story_para">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem quod aliquid voluptas veniam? Consequatur nemo, numquam libero, eaque sed rem.
                        </p>
                            <p className="story_para">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem quod aliquid voluptas veniam? Consequatur nemo.
                        </p>
                        </div>
                    </div>
                    <div className="locations_container">
                        <div className="locations_heading">
                            <h2>Offices!!</h2>
                        </div>
                        <div className="loca_can">
                            <div className="loca_des">
                                <h3 className="locations_para">
                                    Head Office
                                </h3>
                                <p>Toronto Downtown</p>
                                <p>
                                    <span>Address:</span><br/>
                                    28, Fallway Road<br/>
                                    Toronto, ON L6V3H2
                                </p>
                            </div>
                            <div className="loc_img">
                                <div className="img_container">
                                    <img src="./images/Toronto.jpeg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="loca_ind">
                            <div className="loca_des">
                                <h3 className="locations_para">
                                    Head Office
                                </h3>
                                <p>Toronto Downtown</p>
                                <p>
                                    <span>Address:</span><br/>
                                    28, Fallway Road<br/>
                                    Toronto, ON L6V3H2
                                </p>
                            </div>
                            <div className="loc_img">
                                <div className="img_container">
                                    <img src="./images/Toronto.jpeg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default About