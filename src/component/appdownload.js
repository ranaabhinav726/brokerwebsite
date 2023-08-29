import React, { useState } from "react";
import AppdownloadImg from './images/appdownload.png';
import QR from './images/qr.png';
import Googleplay from './images/googleplay.png';
import Appstore from './images/appstore.png';

const Appdownloads = () => {

    return (
        <div className="container appdownloads">
            <div className="row">
                <div className="col-md-7 col-sm-12">
                    <img src={AppdownloadImg} className="mobile-img" alt="" />
                </div>
                <div className="col-md-5 col-sm-12">
                    <h2 className="my-4 text-center">Download our app</h2>
                    <p className="text-center">Integer At Faucibus Urna. Nullam Condimentum Leo Id<br />
                        Elit Sagittis Auctor.Integer At Faucibus Urna. Nullam C<br />
                        Ondimentum Leo Id Elit Sagittis Auctor.Integer At Fauc<br />
                        Ibus Urna. Nullam Condimentum Leo Idelit Sagittis Auc<br />
                        Tor.Integer At Faucibus Urna.</p>
                    <div className="row app-download-links">
                    <div className="col">
                    <img src={QR} className="qr-img" alt="" />

                    </div>
                    <div className="col">
                    <img src={Googleplay} className="gplay-img" alt="" />
                    <img src={Appstore} className="appstore-img" alt="" />

                    </div>
                    </div>

                </div>

            </div>
        </div>

    )
}
export default Appdownloads