import React from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"
import Footer from '../components/footer'
import CognizantImage from '../images/solutions/cognizant.jpg'
import EcommerceImage from '../images/solutions/ecommerce.jpg'
import PayImage from '../images/solutions/pay.jpg'
import PulseImage from '../images/solutions/pulse.jpg'
import SmileyImage from '../images/solutions/smiley.jpg'
import BgImage from '../images/bg/solutions-page-banner.jpg'
import SocialIconsFooter from '../components/social-icons-footer'

const SolutionsPage = () => {
    return (
        <Layout pageTitle="Solutions">
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
                                <h2>Solutions by  <span> PragICTS</span></h2>
                                <p>Software solutions engineered by PragICTS for specific verticals, services, competencies and needs.</p>
                                <div className="horizonral-subtitle"><span>Solutions</span></div>
                            </div>
                            <a href="#sec1" className="custom-scroll-link hero-start-link"><span>Let's Start</span> <i className="fal fa-long-arrow-down"></i></a>
                        </div>
                    </section>
                    <section data-scrollax-parent="true" id="sec1">
                        <div className="section-subtitle left-pos"  data-scrollax="properties: { translateY: '-250px' }" ><span>//</span>Solutions</div>
                        <div className="container main-about">
                            <p>Software solutions are engineered by PragICTS for performance, scalability, security, device interoperability, functionality, and usability (UI/UX experience). These software solutions can be further tailored to the specific needs of the customer to have a perfect fit and match with integration to other 3rd party software systems of the customer. All software is engineered using an open-source technology stack for platform interoperability, cost, performance, scalability, security, and extensibility</p>

                        </div>
                        <div className="bg-parallax-module" data-position-top="50"  data-position-left="20" data-scrollax="properties: { translateY: '-250px' }"></div>
                        <div className="bg-parallax-module" data-position-top="40"  data-position-left="70" data-scrollax="properties: { translateY: '150px' }"></div>
                        <div className="bg-parallax-module" data-position-top="80"  data-position-left="80" data-scrollax="properties: { translateY: '350px' }"></div>
                        <div className="bg-parallax-module" data-position-top="95"  data-position-left="40" data-scrollax="properties: { translateY: '-550px' }"></div>
                        <div className="sec-lines"></div>
                    </section>
                    <section className="dark-bg no-padding">
                        <div className="hidden-info-wrap-bg">
                            <div className="bg-ser">
                            </div>
                            <div className="overlay"></div>
                        </div>
                        <div className="hidden-info-wrap">
                            <div className="hidden-info fl-wrap">
                                <div className="hidden-works-list fl-wrap">
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={CognizantImage}>
                                        <a target="_blank" href='https://cognizant.pragicts.com'>
                                            <div className="hidden-works-item-text">
                                                <h3>Cognizant</h3>
                                                <p>Cognizant provides you with an HCM framework for bespoke HCM (Human Capital Management) functionality implementation. The platform can be tailored to your specific needs.</p>
                                                <div className="clearfix"></div>
                                                <span className="serv-number">01.</span>
                                                <div className="serv-icon"><i className="fal pragicts-cognizant-icon"></i></div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={EcommerceImage}>
                                        <a target="_blank" href='https://ecommerce.pragicts.com'>
                                            <div className="hidden-works-item-text">
                                                <h3>eCommerce</h3>
                                                <p>Tier-1 eCommerce implementation for online shopping using open-source established and proven frameworks from OpenCart, Magento, PrestaShop, Zen Cart, XCart, Bagisto. We also provide comprehensive customization services on the platforms to meet the specific requirements of our customers.</p>
                                                <div className="clearfix"></div>
                                                <span className="serv-number">02.</span>
                                                <div className="serv-icon"><i className="fal pragicts-ecommerce-icon"></i></div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={PayImage}>
                                        <a target="_blank" href='https://pay.pragicts.com'>
                                            <div className="hidden-works-item-text">
                                                <h3>Pay</h3>
                                                <p>Pay by PragICTS enables you to raise invoices and enable your customers to pay online from any location-time-device. Pay is a secure, platform-neutral technology and enables integration with any global or local payment gateway provider. The platform can be tailored to your specific needs.</p>
                                                <div className="clearfix"></div>
                                                <span className="serv-number">03.</span>
                                                <div className="serv-icon"><i className="fal pragicts-pay-icon"></i></div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={PulseImage}>
                                        <a target="_blank" href='https://pulse.pragicts.com'>
                                            <div className="hidden-works-item-text">
                                                <h3>Pulse</h3>
                                                <p>In this day and age, a single online negative comment can spark a tsunami and create a situation for the competition to capitalize on. Recovery in most instances will be tainted with permanent scars. Pulse by PragICTS provides you with a comprehensive online feedback platform to keep a tab on your performance with the relevant stakeholders. Provides you with a live dashboard for prompt corrective action. Pulse can form the foundation for enabling culture for performance and customer delight.</p>
                                                <div className="clearfix"></div>
                                                <span className="serv-number">04.</span>
                                                <div className="serv-icon"><i className="fal pragicts-pulse-icon"></i></div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={SmileyImage}>
                                        <a target="_blank" href='https://smiley.pragicts.com'>
                                            <div className="hidden-works-item-text">
                                                <h3>Smiley</h3>
                                                <p>Smiley by PragICTS enables to you deploy a tab-based online platform to capture customer sentiments at all customer touchpoints across any number of locations with even a global, regional or local geographical distribution. Centralized management dashboard enables to track live all the customer sentiments as it is recorded. Customer sentiments provide you with an early warning system before things take a negative and a sour turn.</p>
                                                <div className="clearfix"></div>
                                                <span className="serv-number">05.</span>
                                                <div className="serv-icon"><i className="fal pragicts-smiley-icon"></i></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fl-wrap limit-box"></div>
                    </section>

                    <SocialIconsFooter />
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default SolutionsPage
