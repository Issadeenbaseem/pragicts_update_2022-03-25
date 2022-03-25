import React from 'react'
import Layout from "../components/layout"
import Footer from '../components/footer'
import { Link } from 'gatsby'
import BgImage from '../images/bg/about-us-page-banner.jpg'
import SocialIconsFooter from '../components/social-icons-footer'

const AboutUsPage = () => {
    return (
        <Layout pageTitle="About">
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
                                <h2>About  <span> PragICTS</span></h2>
                                <p>Few things about us</p>
                                <div className="horizonral-subtitle"><span>About Us</span></div>
                            </div>
                            <a href="#sec1" className="custom-scroll-link hero-start-link"><span>Let's Start</span> <i className="fal fa-long-arrow-down"></i></a>
                        </div>
                    </section>
                    <section data-scrollax-parent="true" id="sec1">
                        <div className="section-subtitle left-pos"  data-scrollax="properties: { translateY: '-250px' }" ><span>//</span>Who we Are</div>
                        <div className="container main-about">
                            <p>PragICTS is a boutique ICT services company in Sri Lanka. We specialize in providing bespoke ICT services relating to software development, IT infrastructure provisioning and management, and cloud platform provisioning and management.</p>
                            <p>From our humble beginnings with a few laptops and a ton of confidence, hopes, and dreams, we have had a challenging journey with our bag full of aches, pains, challenges, failures, and successes. Our resolve and confidence to succeed made our progress to this juncture where we can now boast of a client and assignment portfolio which speaks of our capabilities and the warm customer relationships we established.</p>
                            <p>We look beyond the noise and the hype, consider and evaluate all pertinent options and understand our client's context and need to articulate the most pertinent solutions.</p>
                            <p>Our foundations are based on the capitalization of human ingenuity to engineer and deliver innovative solutions that are bespoke, pragmatic, effective, and elegant. We look beyond the noise and the hype, consider and evaluate all pertinent options and understand our client's context, and need to articulate the most pertinent solutions.</p>
                            <p>Right people, capabilities, values, environment, culture, and leadership form a context for the infusion of passion, innovation, and content. We make constant efforts to nourish and sustain a #1 team, environment, and culture for values, innovation, teamwork, passion, and fun. We also take work-life balance seriously to enable a sustainable team that is content and full of passion.</p>
                        </div>
                        <div className="bg-parallax-module" data-position-top="50"  data-position-left="20" data-scrollax="properties: { translateY: '-250px' }"></div>
                        <div className="bg-parallax-module" data-position-top="40"  data-position-left="70" data-scrollax="properties: { translateY: '150px' }"></div>
                        <div className="bg-parallax-module" data-position-top="80"  data-position-left="80" data-scrollax="properties: { translateY: '350px' }"></div>
                        <div className="bg-parallax-module" data-position-top="95"  data-position-left="40" data-scrollax="properties: { translateY: '-550px' }"></div>
                        <div className="sec-lines"></div>
                    </section>
                    <section className="dark-bg sinsec-dec sinsec-dec2 parallax-section">
                        <div className="container">
                            <div className="section-title">
                                <h2>Why <span>PragICTS </span>?</h2>
                                <p>Our Key Performance Indicators (KPI's)</p>
                                <div className="horizonral-subtitle"><span>Why Us?</span></div>
                            </div>
                            <div className="fl-wrap">
                                <div className="row">
                                    <div className="features-box col-md-4">
                                        <div className="time-line-icon">
                                            <i className="fab pragicts-engineering-icon"></i>
                                        </div>
                                        <h3>Engineering</h3>
                                        <p>A pragmatic and technology-agnostic approach to software engineering.</p>
                                    </div>
                                    <div className="features-box col-md-4">
                                        <div className="time-line-icon">
                                            <i className="fal pragicts-track-record-icon"></i>
                                        </div>
                                        <h3>Track Record</h3>
                                        <p>Deliverables can be demonstrated for their rationale, engineering, results, quality, and value.</p>
                                    </div>
                                    <div className="features-box col-md-4">
                                        <div className="time-line-icon">
                                            <i className="fal pragicts-clients-icon"></i>
                                        </div>
                                        <h3>Clients</h3>
                                        <p>Assertable client base on competency, integrity, and affinity.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="features-box col-md-4">
                                        <div className="time-line-icon">
                                            <i className="fal pragicts-teams-icon"></i>
                                        </div>
                                        <h3>Team</h3>
                                        <p>#1 close-knit team with an unblemished record. Apt + Experience + Integrity</p>
                                    </div>
                                    <div className="features-box col-md-4">
                                        <div className="time-line-icon">
                                            <i className="fal pragicts-pricing-icon"></i>
                                        </div>
                                        <h3>Pricing</h3>
                                        <p>Costs are constantly optimized through engineering, execution, and open technologies for sensible pricing and value creation.</p>
                                    </div>
                                    <div className="features-box col-md-4">
                                        <div className="time-line-icon">
                                            <i className="fab pragicts-onestop-icon"></i>
                                        </div>
                                        <h3>One Stop</h3>
                                        <p>Comprehensive service portfolio to provide ICT services and solutions under one roof.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="features-box col-md-4">
                                        <div className="time-line-icon">
                                            <i className="fab pragicts-intimacy-icon"></i>
                                        </div>
                                        <h3>Intimacy</h3>
                                        <p>The cornerstone to our success and sustainability. We make every concerted effort to ensure customer delight and intimacy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="half-bg-dec single-half-bg-dec" data-ran="12"></div>
                        <div className="sec-lines"></div>
                    </section>

                    <SocialIconsFooter />
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default AboutUsPage
