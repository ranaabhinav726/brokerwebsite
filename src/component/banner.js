import React from "react";
import BannerImg from './images/banner.png';
import OverlayImg from './images/Rectangle 4.png'

const Banner = () => {
    return (
        <div>
            <div className="container-fluid banner">
                <div className="row">

                    <div className="col-12 p-0 overlay position-relative">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <div className="row filter-first-row">
                                <div className="col">
                                    <button type="button" className="btn active-btn">Rent</button>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn">Buy</button>
                                </div>
                                <div className="col-md-9">
                                    <div className="form-check">
                                        <input className="form-check-input chk-box" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Show more search options
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="input-group">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Open</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col-md-1">
                                    <button type="button" className="btn search-btn">&#xF52A;</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="float-end">Show more search options </div>
                                </div>
                            </div>
                        </div>
                        <img src={BannerImg} className="" alt="banner" />
                        <img src={OverlayImg} className="overlay-img" alt="banner" />

                    </div>

                </div>
            </div>

        </div>
    )
}
export default Banner