import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Partner1 from './images/partner1.png';
import Partner2 from './images/partner2.png';
import Partner3 from './images/partner3.png';
import Partner4 from './images/partner4.png';
import Partner5 from './images/partner5.png';



const partnersMain = () => {
    return (
        <div className="container partners">
            <div className="row my-4 our-partners">
                <div className="col-xs-12">
                    <h2 className="mb-4 text-center">OUR PARTNERS</h2>
                    <div className="d-flex">
                        <img src={Partner1} className="" alt="partner" />
                        <img src={Partner2} className="" alt="partner" />
                        <img src={Partner3} className="" alt="partner" />
                        <img src={Partner4} className="" alt="partner" />

                    </div>
                    <br/>
                    <div className="d-flex">
                        <img src={Partner1} className="" alt="partner" />
                        <img src={Partner2} className="" alt="partner" />
                        <img src={Partner3} className="" alt="partner" />
                        <img src={Partner4} className="" alt="partner" />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default partnersMain