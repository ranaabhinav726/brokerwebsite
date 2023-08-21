import React from "react";
import BannerImg from './images/banner.png';
import OverlayImg from './images/Rectangle 4.png'

const Banner=()=>{
    return(
        <div className="container-fluid banner">
            <div className="row">
            <div className="col p-0 overlay">
            <img src={BannerImg} className="" alt="banner" />
            <img src={OverlayImg} className="overlay-img" alt="banner" />

                </div>    
            </div>        
        </div>
    )
}
export default Banner