import React, { useState } from "react";
import AppdownloadImg from './images/appdownload.png';


const Footer = () => {

    return (
        <div className="container appdownloads">
            <div className="row">
                <div className="col-md-7 col-sm-12">
                    <img src={AppdownloadImg} className="mobile-img" alt="" />
                </div>

            </div>
        </div>

    )
}
export default Footer