import React from 'react'
import BiophiliaIcon from '../images/clients/biophilia-icon.png'
import BiophiliaLogo from '../images/clients/biophilia-logo.png'
import TechnomedicsIcon from '../images/clients/technomedics-icon.png'
import TechnomedicsLogo from '../images/clients/technomedics-logo.png'
import AuthenticitiesIcon from '../images/clients/asl-icon.png'
import AuthenticitieslLogo from '../images/clients/asl-logo.png'
import CppGlassIcon from '../images/clients/cppglass-icon.png'
import CppGlasslLogo from '../images/clients/cppglass-logo.png'
import UnicornMetalicsIcon from '../images/clients/unicornmetalics-icon.png'
import UnicornMetalicsLogo from '../images/clients/unicornmetalics-logo.png'

const reviews = [
    {
        id: 1,
        text: "They worked in a professional way and helped in giving the best outcome.",
        client: 'Technomedics (Pvt) Ltd',
        contact: 'AGM',
        image: TechnomedicsIcon,
        link: 'https://clutch.co/profile/pragicts#review-1727492'
    },
    {
        id: 2,
        text: "PragITS communicates effectively and they are easy to approach.",
        client: 'Authenticities (Pvt) Ltd',
        contact: 'Vice President & Director',
        image: AuthenticitiesIcon,
        link: 'https://clutch.co/profile/pragicts#review-1724895'
    },
    {
        id: 3,
        text: "They’ve become part of our team.",
        client: 'CPP Glass Pvt. Ltd',
        contact: 'Managing Director',
        image: CppGlassIcon,
        link: 'https://clutch.co/profile/pragicts#review-1717058'
    },
    {
        id: 4,
        text: "The team is very professional and they provide personalized services.",
        client: 'Unicorn Metalics Company (Pvt) Ltd',
        contact: 'Managing Director',
        image: UnicornMetalicsIcon,
        link: 'https://clutch.co/profile/pragicts#review-1717547'
    },
    {
        id: 5,
        text: "They worked in a professional way and helped in giving the best outcome.",
        client: 'Biophilia (Pvt) Ltd',
        contact: 'CEO',
        image: BiophiliaIcon,
        link: 'https://clutch.co/profile/pragicts#review-1715643'
    }
]

const clients = [
    {
        name: 'Technomedics',
        logo: TechnomedicsLogo,
        url: 'https://technomediclk.com'
    },
    {
        name: 'Authenticities Sri Lanka',
        logo: AuthenticitieslLogo,
        url: 'https://authenticitiessrilanka.com/'
    },
    {
        name: 'Biophilia',
        logo: BiophiliaLogo,
        url: 'https://biophilia.lk'
    },
    {
        name: 'Colombo Picture Palace Glass',
        logo: CppGlasslLogo,
        url: 'http://cppglass.com'
    },
    {
        name: 'Unicorn Metalics',
        logo: UnicornMetalicsLogo,
        url: 'http://unicornmetalics.com/'
    }
]

const HomeClientTestimonials = () => {
    return (
        <section  data-scrollax-parent="true" id="testimonials">
            <div className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }" >Testimonials<span>//</span></div>
            <div className="container">
                <div className="section-title fl-wrap">
                    <h3>Reviews</h3>
                    <h2>Clients and <span>Testimonials</span></h2>
                    <p>Independently captured & verified client feedback through Clutch.co</p>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="slider-carousel-wrap text-carousel-wrap fl-wrap">
                <div className="text-carousel-controls fl-wrap">
                    <div className="container">
                        <div className="sp-cont  sp-cont-prev"><i className="fal fa-long-arrow-left"></i></div>
                        <div className="sp-cont   sp-cont-next"><i className="fal fa-long-arrow-right"></i></div>
                    </div>
                </div>
                <div className="text-carousel cur_carousel-slider-container fl-wrap">
                    {reviews.map(review => (
                        <div key={review.id} className="slick-item">
                            <div className="text-carousel-item">
                                <div className="popup-avatar"><img src={review.image} alt={review.client} title={review.client} /></div>
                                <div className="listing-rating card-popup-rainingvis" data-starrating2="5"> </div>
                                <div className="review-owner fl-wrap">{review.contact}  - <span>{review.client}</span></div>
                                <p> {review.text}</p>
                                <a href={review.link} target="_blank" className="testim-link">Via Clutch</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="fl-wrap">
                <div className="container">
                    <ul className="client-list client-list-white">
                        {clients.map(client => (
                            <li key={client.name}><a href={client.url} target="_blank"><img src={client.logo} className='respimg' alt={client.name} title={client.name} /></a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="sec-lines"></div>
        </section>
    )
}

export default HomeClientTestimonials
