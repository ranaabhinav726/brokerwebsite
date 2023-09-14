import React, { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import BannerImg from './images/banner.png';
import OverlayImg from './images/Rectangle 4.png';
import SearchImg from './images/search.png';

const Banner = () => {

    return (
        <div >
            <div className="container-fluid banner ">
                <div className="row d-none d-md-block">

                    <div className="col-12 p-0 overlay position-relative" id="filterId">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <div className="row filter-first-row mb-2">
                                <div className="col">
                                    <div className="banner-head"><h1 className="mb-0"><strong>BrokkerSpot</strong></h1>
                                        <h2>Find your dream </h2></div>
                                    <div className="d-grid gap-1 d-md-flex justify-content-md-center">

                                        <button className="btn active-btn" type="button">Buy</button>
                                        <button className="btn" type="button">Rent</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row colored-row">
                                <div className="col-md-5">
                                    <Multiselect
                                        // options={'xyz'}
                                        // selectedValues={'xyz'} 
                                        // onSelect={this.onSelect} 
                                        // onRemove={this.onRemove} 
                                        displayValue="name"
                                        className=""
                                    />
                                </div>
                                <div className="col-md-2">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Property Type</option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="Villa">Villa</option>
                                        <option value="Townhouse">Townhouse</option>
                                        <option value="Penthouse">Penthouse</option>
                                        <option value="Compound">Compound</option>
                                        <option value="Duplex">Duplex</option>
                                        <option value="Full Floor">Full Floor</option>
                                        <option value="Half Floor">Half Floor</option>
                                        <option value="Whole Building">Whole Building</option>
                                        <option value="Bulk Rent Unit">Bulk Rent Unit</option>
                                        <option value="Bungalow">Bungalow</option>
                                        <option value="Hotel & Hotel Apartment">Hotel & Hotel Apartment</option>
                                    </select>

                                </div>
                                <div className="col-md-2">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Beds &amp; Baths</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select className="form-select" aria-label="Default select example" style={{ minWidth: '100px' }}>
                                        <option selected>Price</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn search-btn">
                                        <img src={SearchImg} className="" alt="banner" />
                                    </button>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Show more search options
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={BannerImg} className="" alt="banner" />
                        <img src={OverlayImg} className="overlay-img" alt="banner" />

                    </div>
                </div>

                <div className="row d-block d-md-none sm-banner">
                    <div className="col px-0">
                        <img src={BannerImg} className="" alt="banner" />
                    </div>
                    <div className="col-xs-12">
                        <div className="d-grid gap-1 d-flex justify-content-center buy-sell my-3">
                            <button className="btn active-btn" type="button">Buy</button>
                            <button className="btn" type="button">Rent</button>
                        </div>
                    </div>

                    <div className="row m-auto">
                        <div className="col-md-5 mb-2">
                            <Multiselect
                                // options={'xyz'}
                                // selectedValues={'xyz'} 
                                // onSelect={this.onSelect} 
                                // onRemove={this.onRemove} 
                                displayValue="name"
                                className=""
                            />
                        </div>
                        <div className="col-md-2 mb-2">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Property Type</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Villa">Villa</option>
                                <option value="Townhouse">Townhouse</option>
                                <option value="Penthouse">Penthouse</option>
                                <option value="Compound">Compound</option>
                                <option value="Duplex">Duplex</option>
                                <option value="Full Floor">Full Floor</option>
                                <option value="Half Floor">Half Floor</option>
                                <option value="Whole Building">Whole Building</option>
                                <option value="Bulk Rent Unit">Bulk Rent Unit</option>
                                <option value="Bungalow">Bungalow</option>
                                <option value="Hotel & Hotel Apartment">Hotel & Hotel Apartment</option>
                            </select>

                        </div>
                        <div className="col-md-2 mb-2">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Beds &amp; Baths</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col mb-2">
                            <select className="form-select" aria-label="Default select example" style={{ minWidth: '100px' }}>
                                <option selected>Price</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col mb-2">
                            <button type="button" className="btn search-btn">
                                <img src={SearchImg} className="" alt="banner" />
                            </button>
                        </div>
                        <div className="col-md-12 my-1">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Show more search options
                                </label>
                            </div>
                        </div>
                    </div>
                </div>





            </div>

        </div>
    )
}
export default Banner