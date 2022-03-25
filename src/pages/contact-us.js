import React from 'react'
import Layout from "../components/layout"
import Footer from '../components/footer'
import { Link } from 'gatsby'
import BgImage from '../images/bg/contact-us-page-banner.jpg'
import SocialIconsFooter from '../components/social-icons-footer'
import { Formik } from 'formik'
import Axios from 'axios'

const ContactUs = () => {
    return (
        <Layout pageTitle="Contact Us">
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
                                <h2>Get in Touch with <br/><span>PragICTS </span></h2>
                                <div className="horizonral-subtitle"><span>Contact Us</span></div>
                            </div>
                        </div>
                        <a href="#sec1" className="custom-scroll-link hero-start-link"><span>Let's Start</span> <i className="fal fa-long-arrow-down"></i></a>
                    </section>


                    <section data-scrollax-parent="true" id="sec1">
                        <div className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }" >Get in Touch<span>//</span></div>
                        <div className="container">

                            <div className="fl-wrap mar-bottom">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="pr-title fl-wrap">
                                            <h3>Contact  Details</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-9">

                                        <div className="features-box-container single-serv fl-wrap">
                                            <div className="row">

                                                <div className="features-box col-md-4">
                                                    <div className="time-line-icon">
                                                        <i className="fal fa-mobile-android"></i>
                                                    </div>
                                                    <h3>01. Phone</h3>
                                                    <a href="tel:0094114848284">+94 11 484 8284</a>
                                                    <a href="tel:0094114848288">+94 11 484 8288</a>
                                                    <a href="tel:0094704598983">+94 70 459 8983</a>
                                                </div>

                                                <div className="features-box col-md-4">
                                                    <div className="time-line-icon">
                                                        <i className="fal fa-compass"></i>
                                                    </div>
                                                    <h3>02. Location</h3>
                                                    <a href="#">35B, Buthgamwua Road, <br/>Rajagiriya</a>
                                                </div>


                                                <div className="features-box col-md-4">
                                                    <div className="time-line-icon">
                                                        <i className="fal fa-envelope-open"></i>
                                                    </div>
                                                    <h3>03. Email</h3>
                                                    <a href="mailto:info@pragicts.com">info@pragicts.com</a>
                                                    <a href="mailto:support@pragicts.com">support@pragicts.com</a>
                                                    <a href="mailto:escalations@pragicts.com">escalations@pragicts.com</a>
                                                    <a href="mailto:careers@pragicts.com">careers@pragicts.com</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="fw-map-container fl-wrap mar-bottom">
                                <div className="map-container">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.186229962397!2d79.9105932!3d6.9149106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6fe7b2b6e966c939!2sPragICTS!5e0!3m2!1sen!2slk!4v1634983252102!5m2!1sen!2slk" style={{ border: '0', width: '100%', height: '600px' }} allowFullScreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                            <div className="fl-wrap mar-top">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="pr-title fl-wrap">
                                            <h3>Send us a Message</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div id="contact-form">
                                            <Formik
                                            initialValues={{ name: '', email: '', phone: '', comments: '' }}
                                            validate={values => {
                                                const errors = {};
                                                if (!values.email) {
                                                    errors.email = 'Email is Required';
                                                } else if (
                                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                                ) {
                                                    errors.email = 'Invalid email address';
                                                }
                                                if (!values.name) {
                                                    errors.name = 'Name is Required';
                                                }
                                                return errors;
                                            }}
                                            onSubmit={(values, { setSubmitting }) => {
                                                Axios.post('http://localhost/prgcts/cntct.php', values)
                                                    .then(response => {
                                                        console.log(response)

                                                        setSubmitting(false)
                                                    })
                                                    .catch(error => {
                                                        console.log(error);

                                                        setSubmitting(false)
                                                    })
                                            }}
                                            >
                                            {({
                                                values,
                                                errors,
                                                touched,
                                                handleChange,
                                                handleBlur,
                                                handleSubmit,
                                                isSubmitting,
                                                /* and other goodies */
                                            }) => (
                                                <>
                                                    <div id="message">
                                                    {errors.name && touched.name && errors.name}
                                                    {errors.email && touched.email && errors.email}
                                                    </div>
                                                    <form className="custom-form" id="contactform" onSubmit={handleSubmit}>
                                                        <fieldset>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <label><i className="fal fa-user"></i></label>
                                                                    <input
                                                                        type="text"
                                                                        name="name"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.name}
                                                                        id="name"
                                                                        placeholder="Your Name *"
                                                                    />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <label><i className="fal fa-envelope"></i></label>
                                                                    <input
                                                                        type="email"
                                                                        name="email"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.email}
                                                                        id="email"
                                                                        placeholder="Email Address *"
                                                                    />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <label><i className="fal fa-envelope"></i></label>
                                                                    <input
                                                                        type="text"
                                                                        name="phone"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.phone}
                                                                        id="phone"
                                                                        placeholder="Phone"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <textarea
                                                                name="comments"
                                                                id="comments"
                                                                cols="40"
                                                                rows="3"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.comments}
                                                                placeholder="Your Message:">
                                                            </textarea>
                                                            <div className="clearfix"></div>
                                                            <button type="submit" disabled={isSubmitting} className="btn float-btn flat-btn color-btn" id="submit">Send Message</button>
                                                        </fieldset>
                                                    </form>
                                                </>
                                            )}
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-parallax-module" data-position-top="70"  data-position-left="20" data-scrollax="properties: { translateY: '-250px' }"></div>
                        <div className="bg-parallax-module" data-position-top="40"  data-position-left="70" data-scrollax="properties: { translateY: '150px' }"></div>
                        <div className="bg-parallax-module" data-position-top="80"  data-position-left="80" data-scrollax="properties: { translateY: '350px' }"></div>
                        <div className="bg-parallax-module" data-position-top="95"  data-position-left="40" data-scrollax="properties: { translateY: '-550px' }"></div>
                        <div className="sec-lines"></div>
                    </section>

                    <SocialIconsFooter />

                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default ContactUs
