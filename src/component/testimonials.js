import React, { useState } from "react";
import Testimonial1 from './images/testimonial1.png';
import Testimonial2 from './images/testimonial2.png';
import Testimonial3 from './images/testimonial3.png';

const Testimonials = () => {

    return (
        <div className="container testimonials">
            <div className="row">
            <h2 className="my-4 text-center">USER REVIEWS</h2>
                <div className="col-md-4">
                    <div class="card mt-4">
                        <div class="card-body">
                        <img src={Testimonial1} className="" alt="testimonial" />
                            <h5 class="card-title">LINDA PRANASARI</h5>
                            <p class="card-text">integer at faucibus urna. nullam condimentum leo id elit sagittis auctor.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card mt-4">
                        <div class="card-body">
                        <img src={Testimonial2} className="" alt="testimonial" />
                            <h5 class="card-title">TRISNOWATI</h5>
                            <p class="card-text">integer at faucibus urna. nullam condimentum leo id elit sagittis auctor.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card mt-4">
                        <div class="card-body">
                        <img src={Testimonial3} className="" alt="testimonial" />
                            <h5 class="card-title">JOHN</h5>
                            <p class="card-text">integer at faucibus urna. nullam condimentum leo id elit sagittis auctor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Testimonials