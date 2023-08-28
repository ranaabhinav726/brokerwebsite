import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import BannerImg from './images/banner.png';
import OverlayImg from './images/Rectangle 4.png'

const Banner = () => {
    // const [optiondata] = useState({name: 'Option 1', id: 1},{name: 'Option 2', id: 2})
    const [showPage, setshowPage] = useState('');
    const dropdownHandler = (type) => {
        setshowPage(type)
    }
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
                                <div className="col-md-9 d-flex">
                                    <div className="separator"></div>
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
                                <div className="col-md-2">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Price</option>
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
                                <div className="col-md-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>All Furnishings</option>
                                        <option value="All furnishings">All furnishings</option>
                                        <option value="Furnished">Furnished</option>
                                        <option value="Unfurnished">Unfurnished</option>
                                        <option value="Partly furnished">Partly furnished</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    {/* <select className="form-select" onClick={() => dropdownHandler('area')}>
                                        <option>
                                            
                                        </option>
                                    </select> */}
                                    <div class="input-group mb-3">
                                        {/* <input type="text" class="form-control" placeholder="Username" onClick={() => dropdownHandler('area')}/> */}
                                        <button type="button" class="btn btn-primary" onClick={() => dropdownHandler('area')}>Primary</button>                                    </div>

                                </div>
                                <div className="col-md-2">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Price</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <Multiselect
                                        // options={'xyz'}
                                        // selectedValues={'xyz'} 
                                        // onSelect={this.onSelect} 
                                        // onRemove={this.onRemove} 
                                        displayValue="name"
                                        className=""
                                    />
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
                {showPage === 'area' ?
                    <div className="row area-row">
                        <div className="">
                            <div className="col">  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="col-md-1">-</div>
                            <div className="col">  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    : ""}
            </div>

        </div>
    )
}
export default Banner