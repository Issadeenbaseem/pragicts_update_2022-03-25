import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const HomeSolutions = () => {
    return (
        <section data-scrollax-parent="true" id="solutions">
            <div className="section-subtitle" data-scrollax="properties: { translateY: '-250px' }" >Solutions by PragICTS <span>//</span></div>
            <div className="container">
                <div className="section-title fl-wrap">
                    <h3>Software solutions by PragICTS</h3>
                    <h2>Software <span> Solutions</span></h2>
                    <p>
                    Software solutions by PragICTS are engineered for productivity, usability, access interoperability (any device), deployment neutral (on-premise and cloud configurations), extensibility, and effective operations across Internet-enabled devices.
                    </p>
                </div>
                <div className="custom-inner-holder  mar-bottom">
                    <div className="custom-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-inner-header cognizant">
                                    <i className="fal pragicts-cognizant-icon"></i>
                                    <h3>HR / HCM Solution</h3>
                                </div>
                                <div className="ci-num"><span>01. - </span></div>
                            </div>
                            <div className="col-md-5">
                                <div className="custom-inner-content fl-wrap">
                                    <h4>Cognizant</h4>
                                    <p>Human capital management platform.</p>
                                    <a href="https://cognizant.pragicts.com" className="cus-inner-head-link color-bg">Details + </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <StaticImage src='../images/solutions/cognizant.jpg' className="respimg" alt="Cognizant by PragICTS" title="Cognizant by PragICTS" ></StaticImage>
                            </div>
                        </div>
                    </div>
                    <div className="custom-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-inner-header ecommerce">
                                    <i className="fal pragicts-ecommerce-icon"></i>
                                    <h3>Online Business</h3>
                                </div>
                                <div className="ci-num"><span>02. - </span></div>
                            </div>
                            <div className="col-md-5">
                                <div className="custom-inner-content fl-wrap">
                                    <h4>Ecommerce</h4>
                                    <p>Tier-1 eCommerce implementation for online shopping.</p>
                                    <a href="https://ecommerce.pragicts.com" className="cus-inner-head-link color-bg">Details + </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <StaticImage src='../images/solutions/ecommerce.jpg' className="respimg" alt="eCommerce by PragICTS" title="eCommerce by PragICTS" ></StaticImage>
                            </div>
                        </div>
                    </div>
                    <div className="custom-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-inner-header pay">
                                    <i className="fal pragicts-pay-icon"></i>
                                    <h3>Online Invoicing & Billing</h3>
                                </div>
                                <div className="ci-num"><span>03. - </span></div>
                            </div>
                            <div className="col-md-5">
                                <div className="custom-inner-content fl-wrap">
                                    <h4>Pay</h4>
                                    <p>Online invoicing and payment platform. Integration with any payment Gateway.</p>
                                    <a href="https://pay.pragicts.com" className="cus-inner-head-link color-bg">Details + </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <StaticImage src='../images/solutions/pay.jpg' className="respimg" alt="Pay by PragICTS" title="Pay by PragICTS" ></StaticImage>
                            </div>
                        </div>
                    </div>
                    <div className="custom-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-inner-header pulse">
                                    <i className="fal pragicts-pulse-icon"></i>
                                    <h3>Feedback / Survey</h3>
                                </div>
                                <div className="ci-num"><span>04. - </span></div>
                            </div>
                            <div className="col-md-5">
                                <div className="custom-inner-content fl-wrap">
                                    <h4>Pulse</h4>
                                    <p>Online comprehensive customer feedback platform.</p>
                                    <a href="https://pulse.pragicts.com" className="cus-inner-head-link color-bg">Details + </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <StaticImage src='../images/solutions/pulse.jpg' className="respimg" alt="Pulse by PragICTS" title="Pulse by PragICTS" ></StaticImage>
                            </div>
                        </div>
                    </div>
                    <div className="custom-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-inner-header smiley">
                                    <i className="fal pragicts-smiley-icon"></i>
                                    <h3>Customer Sentiment Management</h3>
                                </div>
                                <div className="ci-num"><span>05. - </span></div>
                            </div>
                            <div className="col-md-5">
                                <div className="custom-inner-content fl-wrap">
                                    <h4>Smiley</h4>
                                    <p>Online comprehensive customer sentiment management platform.</p>
                                    <a href="https://smiley.pragicts.com" className="cus-inner-head-link color-bg">Details + </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <StaticImage src='../images/solutions/smiley.jpg' className="respimg" alt="Smiley by PragICTS" title="Smiley by PragICTS" ></StaticImage>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec-lines"></div>
        </section>
    )
}

export default HomeSolutions
