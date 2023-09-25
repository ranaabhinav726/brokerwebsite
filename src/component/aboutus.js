import React from "react";
import Nav from "./nav";
import AbtImg from './images/about.jpg';


const AboutUs = () => {

    return (
        <>
            <Nav />

            <section className="">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="blur-shadow-image text-center">
                                <img src={AbtImg} alt="img-blur-shadow" className="img-fluid shadow border-radius-lg max-height-600" />
                            </div>
                        </div>
                        <div className="col-md-6 mb-md-0 mb-4">
                            <h1 className="text-gradient primary-text">About BrokkerSpot</h1>
                            <h4>Very nice subtitle</h4>
                            <p className="mb-md-5 mb-2">
                                Our mission: To motivate and inspire people to get living the life they deserve.
                                When you look for a property, it's not just a better home you seek, it's a better future.
                                Unlock Your Potential                            </p>
                            <p><span className="ms-2">&#9679;</span> About 1</p>
                            <p><span className="ms-2">&#9679;</span> About 2</p>
                            <p><span className="ms-2">&#9679;</span> About 3</p>
                            <p><span className="ms-2">&#9679;</span> About 4</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUs