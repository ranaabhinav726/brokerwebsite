import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Partner1 from './images/LOGO/partner1.png';
import Partner2 from './images/LOGO/partner2.png';
import Partner3 from './images/LOGO/partner3.png';
import Partner4 from './images/LOGO/partner4.png';
import Partner5 from './images/LOGO/partner5.png';
import Partner6 from './images/LOGO/partner6.png';
import Partner7 from './images/LOGO/partner7.png';
import Partner8 from './images/LOGO/partner8.png';



const partnersMain = () => {
    return (
        <div className="container  our-partners">
            <div className="row my-4">
                <div className="col-xs-12">
                    <h2 className="mb-4 text-center">OUR PARTNERS</h2>
                </div>
            </div>
            <div className="row our-partners">
                <div className="col-md-3 col-sm-6 col-xs-6 my-4">
                    <div className="img-bg">
                        <img src={Partner1} className="" alt="partner" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 my-4">
                    <div className="img-bg">
                        <img src={Partner2} className="" alt="partner" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 my-4">
                    <div className="img-bg">
                        <img src={Partner3} className="" alt="partner" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 my-4">
                    <div className="img-bg">
                        <img src={Partner4} className="" alt="partner" />
                    </div>
                </div>
            </div>
            <div className="row our-partners">
                <div className="col-md-3 col-sm-6 col-xs-6 my-4">
                    <div className="img-bg">
                        <img src={Partner5} className="" alt="partner" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 my-4">
                    <div className="img-bg">
                        <img src={Partner6} className="" alt="partner" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 my-4">
                    <div className="img-bg">
                        <img src={Partner7} className="" alt="partner" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 my-4">
                    <div className="img-bg">
                        <img src={Partner8} className="" alt="partner" />
                    </div>
                </div>
            </div>
        </div >
    )
}
export default partnersMain