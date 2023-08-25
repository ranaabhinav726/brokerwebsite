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


const innerPage = () => {
    return (
        <div className="container carousel-section">
            <div className="row mt-2">
                <div className="col-xs-12">
                    <h2>Broker story</h2>
                    <OwlCarousel className='owl-theme' loop items={9} nav>
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
        </div>
    )
}
export default innerPage