import React from "react";
import Nav from "./nav";
import Footer from "./footer";


const ContactUs = () => {

    return (
        <>
            <Nav />
            <section className="container pt-5 pb-lg-2 pb-xl-4 py-xxl-5 my-2">
                <div className="row pb-1 pb-sm-3 pb-lg-4">
                    <div className="col-lg-4 pe-xxl-4">
                        <h1 className="primary-text">Contacts</h1>
                        <p className="pb-4 mb-0 mb-sm-2">Get in touch with us by completing the below form or call us now</p>
                    </div>
                    <div className="col-lg-8 col-xl-7 offset-xl-1">
                        <form className="row g-4 needs-validation" novalidate="">
                            <div className="col-sm-6">
                                <label className="form-label fs-base" for="name">Name</label>
                                <input className="form-control" type="text" placeholder="Your name" required="" id="name" />
                                <div className="invalid-feedback">Please enter your name!</div>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base" for="email">Email</label>
                                <input className="form-control" type="email" placeholder="Email address" required="" id="email" />
                                <div className="invalid-feedback">Please provide a valid email address!</div>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base" for="phone">Phone</label>
                                <input className="form-control" type="text" placeholder="Phone number" id="phone" />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label fs-base" for="location">Location</label>
                                <select className="form-select" id="location">
                                    <option value="All locations">All locations</option>
                                    <option value="Asia and Pacific">Asia and Pacific</option>
                                    <option value="Central Europe">Central Europe</option>
                                    <option value="Eastern Europe">Eastern Europe</option>
                                    <option value="North America">North America</option>
                                    <option value="South America">South America</option>
                                </select>
                            </div>
                            <div className="col-sm-12">
                                <label className="form-label fs-base" for="message">How can we help?</label>
                                <textarea className="form-control" rows="5" placeholder="Enter your message here..." required="" id="message"></textarea>
                                <div className="invalid-feedback">Please enter your message!</div>
                            </div>
                            <div className="col-sm-12 pt-2">
                                <button className="btn primary-bg" type="submit">Send a request</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <div class="container contact-us">
                <div class="row">
                    <div class="col-lg-8 col-xl-6 text-center mx-auto">
                        <h1 class="mb-4">We're here to help!</h1>
                    </div>
                </div>

                <div class="row g-4 g-md-5 mt-0 mt-lg-3">
                    <div class="col-lg-4 mt-lg-0">
                        <div class="card card-body shadow py-5 text-center h-100">
                            <h5 class="mb-3">Customer Support</h5>
                            <ul class="list-inline mb-0">
                                <li class="list-item mb-3">
                                    <a href="#">Chicago HQ Estica Cop.  Macomb, MI 48042 </a>
                                </li>
                                <li class="list-item mb-3">
                                    <a href="#">(423) 733-8222 </a>
                                </li>
                                <li class="list-item mb-0">
                                    <a href="#">example@email.com </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-4 mt-lg-0">
                        <div class="card card-body shadow py-5 text-center h-100">
                            <h5 class="mb-3">Contact Address</h5>
                            <ul class="list-inline mb-0">
                                <li class="list-item mb-3 h6 fw-light">
                                    <a href="#">2492 Centennial NW, Acworth, GA, 30102 </a>
                                </li>
                                <li class="list-item mb-3 h6 fw-light">
                                    <a href="#">+896-789-546 </a>
                                </li>
                                <li class="list-item mb-0 h6 fw-light">
                                    <a href="#">example@email.com </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-4 mt-lg-0">
                        <div class="card card-body shadow py-5 text-center h-100">
                            <h5 class="mb-3">Main Office Address</h5>
                            <ul class="list-inline mb-0">
                                <li class="list-item mb-3 h6 fw-light">
                                    <a href="#">2002 Horton Ford Rd, Eidson, TN, 37731 </a>
                                </li>
                                <li class="list-item mb-3 h6 fw-light">
                                    <a href="#">(678) 324-1251 </a>
                                </li>
                                <li class="list-item mb-0 h6 fw-light">
                                    <a href="#">example@email.com </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ContactUs