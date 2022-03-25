import React from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"
import Footer from '../components/footer'
import SoftwareImage from '../images/services/software.jpg'
import InfrastructureImage from '../images/services/infrastructure.jpg'
import CloudImage from '../images/services/cloud.jpg'
import BgImage from '../images/bg/services-page-banner.jpg'
import SocialIconsFooter from '../components/social-icons-footer'

const ServicesPage = () => {
    return (
        <Layout pageTitle="Services">
            <div id="wrapper" className="single-page-wrap">
                <div className="content">
                    <div className="single-page-decor"></div>
                    <div className="single-page-fixed-row">
                        <div className="scroll-down-wrap">
                            <div className="mousey">
                                <div className="scroller"></div>
                            </div>
                            <span>Scroll Down</span>
                        </div>
                        <Link to="/" className="single-page-fixed-row-link"><i className="fal fa-arrow-left"></i> <span>Back to home</span></Link>
                    </div>

                    <section className="parallax-section dark-bg sec-half parallax-sec-half-right" data-scrollax-parent="true">
                        <div className="bg par-elem"  data-bg={BgImage} data-scrollax="properties: { translateY: '30%' }"></div>
                        <div className="overlay"></div>
                        <div className="pattern-bg"></div>
                        <div className="container">
                            <div className="section-title">
                                <h2>Services by  <br/><span> PragICTS</span></h2>
                                <p>Everything We Do</p>
                                <div className="horizonral-subtitle"><span>Services</span></div>
                            </div>
                            <a href="#sec1" className="custom-scroll-link hero-start-link"><span>Let's Start</span> <i className="fal fa-long-arrow-down"></i></a>
                        </div>
                    </section>
                    <section data-scrollax-parent="true" id="sec1">
                        <div className="section-subtitle left-pos"  data-scrollax="properties: { translateY: '-250px' }" ><span>//</span>What We Do</div>
                        <div className="container main-about">
                            <p>Our services are articulated and constantly reviewed for effectiveness, quality, and customer delight. Services are delivered by professionals with relevant expertise & experience. Quality is ensured through pragmatic processes, engaged customer interactions, multi-tier reviews/oversight, regular customer feedback, engineering standards, and the deployment of standards-based technologies.</p>
                            <p>Our engagement models are articulated to meet the specific and bespoke needs and context of our customers. These configurations can range from fixed price, utilization, on-demand to hybrid models to provide the optimum balance for cost-effective, pragmatic, and seamless execution.</p>
                            <p>Our impeccable track record and reference-able client base is a testament to these assertions.</p>
                        </div>
                        <div className="bg-parallax-module" data-position-top="50"  data-position-left="20" data-scrollax="properties: { translateY: '-250px' }"></div>
                        <div className="bg-parallax-module" data-position-top="40"  data-position-left="70" data-scrollax="properties: { translateY: '150px' }"></div>
                        <div className="bg-parallax-module" data-position-top="80"  data-position-left="80" data-scrollax="properties: { translateY: '350px' }"></div>
                        <div className="bg-parallax-module" data-position-top="95"  data-position-left="40" data-scrollax="properties: { translateY: '-550px' }"></div>
                        <div className="sec-lines"></div>
                    </section>
                    <section className="dark-bg no-padding">
                        <div className="fs-carousel-wrap fl-wrap full-height slider-carousel-wrap">
                            <div className="fs-carousel fl-wrap full-height cur_carousel-slider-container">
                                <div style={{ paddingTop: '250px', paddingBottom: '250px' }} className="fs-carousel-item">
                                    <div className="fs-carousel-title fl-wrap">

                                        <h3><Link to="/service/software-development">Software</Link></h3>
                                        <Link to="/service/software-development" className="fs-carousel-link">More Details</Link>
                                    </div>
                                    <div className="carousle-item-number"><span>01.</span></div>
                                    <div className="bg"  data-bg={SoftwareImage}></div>
                                    <div className="overlay"></div>
                                </div>
                                <div style={{ paddingTop: '250px', paddingBottom: '250px' }} className="fs-carousel-item">
                                    <div className="fs-carousel-title fl-wrap">

                                        <h3><a target="_blank" href="https://infrastructure.pragicts.com/">Infrastructure</a></h3>
                                        <a target="_blank" href="https://infrastructure.pragicts.com/" className="fs-carousel-link">More Details</a>
                                    </div>
                                    <div className="carousle-item-number"><span>02.</span></div>
                                    <div className="bg"  data-bg={InfrastructureImage}></div>
                                    <div className="overlay"></div>
                                </div>
                                <div style={{ paddingTop: '250px', paddingBottom: '250px' }} className="fs-carousel-item">
                                    <div className="fs-carousel-title fl-wrap">

                                        <h3><a target="_blank" href="https://cloud.pragicts.com/">Cloud</a></h3>
                                        <a target="_blank" href="https://cloud.pragicts.com/" className="fs-carousel-link">More Details</a>
                                    </div>
                                    <div className="carousle-item-number"><span>03.</span></div>
                                    <div className="bg"  data-bg={CloudImage}></div>
                                    <div className="overlay"></div>
                                </div>
                            </div>
                            <div className="sp-cont sarr-contr sp-cont-prev"><i className="fal fa-arrow-left"></i></div>
                            <div className="sp-cont sarr-contr sp-cont-next"><i className="fal fa-arrow-right"></i></div>
                            <div className="slider-nav-counter"></div>
                        </div>
                    </section>

                    <SocialIconsFooter />
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default ServicesPage
