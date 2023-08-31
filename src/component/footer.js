import React, { useState } from "react";
import AppdownloadImg from './images/appdownload.png';


const Footer = () => {

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col"><h3><span className="primary-text">Ready To Get</span> Started?</h3></div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <ul className="list-group">
                            <li className="list-group-item"><span className="primary-text">Quick</span> Link</li>
                            <li className="list-group-item">Home</li>
                            <li className="list-group-item">Announcements</li>
                            <li className="list-group-item">Meeting</li>
                            <li className="list-group-item">Account</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <ul className="list-group">
                            <li className="list-group-item"><span className="primary-text">Need</span> Help?</li>
                            <li className="list-group-item">FAQs</li>
                            <li className="list-group-item">Privacy</li>
                            <li className="list-group-item">Privacy Policy</li>
                            <li className="list-group-item">&nbsp;</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <ul className="list-group">
                            <li className="list-group-item"><span className="primary-text">Social</span> Media</li>
                            <li className="list-group-item">Facebook</li>
                            <li className="list-group-item">Instagram</li>
                            <li className="list-group-item">Threads</li>
                            <li className="list-group-item">&nbsp;</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <ul className="list-group">
                            <li className="list-group-item"><span className="primary-text">Weekly</span> Newsletter</li>
                            <li className="list-group-item"><input type="text" className="form-control" placeholder="Name" /></li>
                            <li className="list-group-item"><input type="ema" className="form-control" placeholder="Name" /></li>
                            <li className="list-group-item"><button className="btn active-btn mt-2" type="button">Subscribe</button></li>
                            <li className="list-group-item">&nbsp;</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center"><p>COPYRIGHT &copy; 2023 BROKKERSPOT All Rights Reserved</p></div>
                </div>
            </div>
        </div>

    )
}
export default Footer