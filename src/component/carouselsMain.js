import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Round1 from './images/brokerspot.png';
import Round2 from './images/rachid.png';
import Round3 from './images/neha.png';
import Round4 from './images/aman.png';
import Round5 from './images/john.png';
import Round6 from './images/noha.png';
import Round7 from './images/ankita.png';
import Round8 from './images/roy.png';
import Round9 from './images/noha1.png';
import Damac1 from './images/damac1.png';
import Damac2 from './images/damac2.png';
import Damac3 from './images/damac3.png';
import Secondary1 from './images/Secondary1.png';
import Secondary2 from './images/Secondary2.png';
import Secondary3 from './images/Secondary3.png';
import Promotion1 from './images/Promotion1.png';
import Promotion2 from './images/Promotion2.png';
import CarouselOverlay from './images/CarouselOverlay.png';
import Partner1 from './images/partner1.png';
import Partner2 from './images/partner2.png';
import Partner3 from './images/partner3.png';
import Partner4 from './images/partner4.png';
import Partner5 from './images/partner5.png';



const innerPage = () => {
    return (
        <div className="container carousel-section">
            <div className="row my-4 broker-story">
                <div className="col-xs-12">
                    <h2 className="mb-4">Broker story</h2>
                    <OwlCarousel className='owl-theme' margin={15} loop dots={false} responsiveClass={true} responsive={
                        {
                            0: {
                                items: 1,
                                loop: true
                            },
                            600: {
                                items: 5,
                                nav: false
                            },
                            1000: {
                                items: 9,
                                nav: false,
                                loop: true
                            }
                        }
                    }>
                        <div class='item'>
                            <img src={Round1} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Round2} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Round3} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Round4} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Round5} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Round6} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Round7} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Round8} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Round9} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Round1} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Round2} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Round3} className="" alt="banner" />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            {/* ///////////////////////////////////// DAMAC ///////////////////////////////////// */}
            <div className="row my-4 damac">
                <div className="col-xs-12">
                    <h2 className="mb-4">DAMAC</h2>
                    <OwlCarousel className='owl-theme' margin={15} loop dots={false} responsiveClass={true} responsive={
                        {
                            0: {
                                items: 1,
                                loop: true
                            },
                            600: {
                                items: 2,
                                nav: false
                            },
                            1000: {
                                items: 3.5,
                                nav: false,
                                loop: true
                            }
                        }
                    }>
                        <div class='item'>
                            <div class="card">
                                <img src={Damac1} class="card-img-top" alt="..." />
                                <button>80 UNITS</button>
                                <div class="card-body">
                                    <p class="card-title">AED <strong>100,0000</strong></p>
                                    <p className="dark-grey"><strong>SAFA / TWO</strong></p>
                                    <p class="card-text">DUBAI | UNITED ARAB EMIRATES</p>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="card">
                                <img src={Damac2} class="card-img-top" alt="..." />
                                <button>80 UNITS</button>
                                <div class="card-body">
                                    <p class="card-title">AED <strong>100,0000</strong></p>
                                    <p className="dark-grey"><strong>SAFA / TWO</strong></p>
                                    <p class="card-text">DUBAI | UNITED ARAB EMIRATES</p>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="card">
                                <img src={Damac3} class="card-img-top" alt="..." />
                                <button>80 UNITS</button>
                                <div class="card-body">
                                    <p class="card-title">AED <strong>100,0000</strong></p>
                                    <p className="dark-grey"><strong>SAFA / TWO</strong></p>
                                    <p class="card-text">DUBAI | UNITED ARAB EMIRATES</p>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="card">
                                <img src={Damac1} class="card-img-top" alt="..." />
                                <button>80 UNITS</button>
                                <div class="card-body">
                                    <p class="card-title">AED <strong>100,0000</strong></p>
                                    <p className="dark-grey"><strong>SAFA / TWO</strong></p>
                                    <p class="card-text">DUBAI | UNITED ARAB EMIRATES</p>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            {/* ///////////////////////////////////// SECONDARY CAROUSEL ///////////////////////////////////// */}
            <div className="row my-4 secondary">
                <div className="col-xs-12">
                    <h2 className="mb-4">SECONDARY</h2>
                    <OwlCarousel className='owl-theme' margin={15} loop dots={false} responsiveClass={true} responsive={
                        {
                            0: {
                                items: 1,
                                loop: true
                            },
                            600: {
                                items: 2,
                                nav: false
                            },
                            1000: {
                                items: 3.5,
                                nav: false,
                                loop: true
                            }
                        }
                    }>
                        <div class='item'>
                            <div class="card">
                                <div class="card-body">
                                    <div className="d-flex">
                                        <img src={Round1} className="user-img" alt="banner" />
                                        <p>Aman</p>
                                    </div>
                                </div>
                                <img src={Secondary1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-title">AED <strong>100,0000</strong></p>
                                    <p className="dark-grey"><strong>SAFA / TWO</strong></p>
                                    <p class="card-text">DUBAI | UNITED ARAB EMIRATES</p>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="card">
                                <div class="card-body">
                                    <div className="d-flex">
                                        <img src={Round1} className="user-img" alt="banner" />
                                        <p>Aman</p>
                                    </div>
                                </div>
                                <img src={Secondary2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-title">AED <strong>100,0000</strong></p>
                                    <p className="dark-grey"><strong>SAFA / TWO</strong></p>
                                    <p class="card-text">DUBAI | UNITED ARAB EMIRATES</p>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="card">
                                <div class="card-body">
                                    <div className="d-flex">
                                        <img src={Round1} className="user-img" alt="banner" />
                                        <p>Aman</p>
                                    </div>
                                </div>
                                <img src={Secondary3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-title">AED <strong>100,0000</strong></p>
                                    <p className="dark-grey"><strong>SAFA / TWO</strong></p>
                                    <p class="card-text">DUBAI | UNITED ARAB EMIRATES</p>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="card">
                                <div class="card-body">
                                    <div className="d-flex">
                                        <img src={Round1} className="user-img" alt="banner" />
                                        <p>Aman</p>
                                    </div>
                                </div>
                                <img src={Secondary1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-title">AED <strong>100,0000</strong></p>
                                    <p className="dark-grey"><strong>SAFA / TWO</strong></p>
                                    <p class="card-text">DUBAI | UNITED ARAB EMIRATES</p>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            {/* ///////////////////////////////////// PROMOTION CAROUSEL ///////////////////////////////////// */}
            <div className="row my-4 promotion">
                <div className="col-xs-12">
                    <h2 className="mb-4">PROMOTION</h2>
                    <OwlCarousel className='owl-theme' margin={15} loop dots={false} responsiveClass={true} responsive={
                        {
                            0: {
                                items: 1,
                                loop: true
                            },
                            600: {
                                items: 1,
                                nav: false
                            },
                            1000: {
                                items: 2.1,
                                nav: false,
                                loop: true
                            }
                        }
                    }>
                        <div class='item'>
                            <div class="card">

                                <img src={Promotion1} class="card-img-top" alt="..." />
                                <img src={CarouselOverlay} className="carousel-overlay" alt="banner" />
                                <div class="card-body">
                                     <button>80 UNITS</button>
                                    <p class="card-title"><strong>Exclusive<br />Offers</strong></p>
                                </div>

                            </div>
                        </div>
                        <div class='item'>
                            <div class="card">

                                <img src={Promotion2} class="card-img-top" alt="..." />
                                <img src={CarouselOverlay} className="carousel-overlay" alt="banner" />
                                <div class="card-body">
                                     <button>80 UNITS</button>
                                    <p class="card-title"><strong>Exclusive<br />Offers</strong></p>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="card">
                                <img src={Promotion1} class="card-img-top" alt="..." />
                                <img src={CarouselOverlay} className="carousel-overlay" alt="banner" />
                                <div class="card-body">
                                     <button>80 UNITS</button>
                                    <p class="card-title"><strong>Exclusive<br />Offers</strong></p>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            {/* ///////////////////////////////////// OUR PARTNERS ///////////////////////////////////// */}
            <div className="row my-4 our-partners">
                <div className="col-xs-12">
                    <h2 className="mb-4 text-center">OUR PARTNERS</h2>
                    <OwlCarousel className='owl-theme' loop dots={false} responsiveClass={true} responsive={
                        {
                            0: {
                                items: 1,
                                loop: true
                            },
                            600: {
                                items: 2.5,
                                nav: false
                            },
                            1000: {
                                items: 4.5,
                                nav: false,
                                loop: true
                            }
                        }
                    }>
                        <div class='item'>
                            <img src={Partner1} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Partner2} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Partner3} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Partner4} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Partner5} className="" alt="banner" />
                        </div>
                        <div class='item'>
                            <img src={Partner3} className="" alt="banner" />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}
export default innerPage