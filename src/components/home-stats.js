import React from 'react'
import NumbersBgImage from '../images/bg/bg-stats.jpg'

const HomeStats = () => {

    return (
        <section id="stats" className="parallax-section dark-bg sec-half parallax-sec-half-right" data-scrollax-parent="true">
            <div className="bg home-sec-bg par-elem" data-bg={NumbersBgImage} data-scrollax="properties: { translateY: '30%' }"></div>
            <div className="overlay"></div>
            <div className="container">
                <div className="section-title">
                    <h2>In a  <span>Nutshell </span></h2>
                    <p>The KPIs we focus on and deliver right across the company from the very top to the very bottom. This is achieved and sustained by direction, passion, purpose, empathy, and team camaraderie.</p>
                    <div className="horizonral-subtitle"><span>Numbers</span></div>
                </div>
                <div className="fl-wrap facts-holder">
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num-div">
                                        <span data-content="0" data-num="95" className='num'>0</span>%
                                    </div>
                                </div>
                            </div>
                            <h6>Customer Content</h6>
                        </div>
                    </div>
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num-div">
                                        <span data-content="0" data-num="90" className='num'>0</span>%
                                    </div>
                                </div>
                            </div>
                            <h6>Customer Support</h6>
                        </div>
                    </div>
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num-div">
                                        <span data-content="0" data-num="99" className='num'>0</span>%
                                    </div>
                                </div>
                            </div>
                            <h6>On-Time Delivery</h6>
                        </div>
                    </div>
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num-div">
                                        <span data-content="0" data-num="100" className='num'>0</span>%
                                    </div>
                                </div>
                            </div>
                            <h6>Teamwork</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeStats
