import React from "react";
import Nav from "./nav";
import AbtImg from './images/about.jpg';
import Footer from "./footer";
import SecondImage from './images/Frame.png';
import FirstImage from './images/First.jpg';



const AboutUs = () => {

    return (
        <>
            <Nav />

            <section className="">
                <div className="container py-5">
                    <div className="row align-items-center">

                        <div className="col-md-6 mb-md-0 mb-4">
                            <h1 className="text-gradient primary-text">About BrokkerSpot</h1>
                            <h4>Very nice subtitle</h4>
                            <p className="mb-md-5 mb-2">
                                Our mission: To motivate and inspire people to get living the life they deserve.
                                When you look for a property, it's not just a better home you seek, it's a better future.
                                Unlock Your Potential
                            </p>
                            <p>
                                Our mission: To motivate and inspire people to get living the life they deserve.
                                When you look for a property, it's not just a better home you seek, it's a better future.
                                Unlock Your Potential</p>

                        </div>
                        <div className="col-md-6">
                            <div className="blur-shadow-image text-center">
                                <img style={{ borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px' }} src={FirstImage} alt="img-blur-shadow" className="img-fluid shadow border-radius-lg max-height-600" />
                            </div>
                        </div>

                    </div>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-6">
                            <div className="blur-shadow-image text-center">
                                <img src={SecondImage} style={{ borderTopRightRadius: '40px', borderBottomRightRadius: '40px' }} alt="img-blur-shadow" className="img-fluid shadow border-radius-lg max-height-600" />
                            </div>
                        </div>
                        <div className="col-md-6 mb-md-0 mb-4">
                            <h1 className="text-gradient primary-text">About BrokkerSpot</h1>
                            <h4>Very nice subtitle</h4>
                            <p className="mb-md-5 mb-2">
                                Our mission: To motivate and inspire people to get living the life they deserve.
                                When you look for a property, it's not just a better home you seek, it's a better future.
                                Unlock Your Potential
                            </p>
                            <p>
                                Our mission: To motivate and inspire people to get living the life they deserve.
                                When you look for a property, it's not just a better home you seek, it's a better future.
                                Unlock Your Potential</p>

                        </div>


                    </div>
                    <div className="row align-items-center mt-3">

                        <div className="col-md-6 mb-md-0 mb-4">
                            <h1 className="text-gradient primary-text">About BrokkerSpot</h1>
                            <h4>Very nice subtitle</h4>
                            <p className="mb-md-5 mb-2">
                                Our mission: To motivate and inspire people to get living the life they deserve.
                                When you look for a property, it's not just a better home you seek, it's a better future.
                                Unlock Your Potential
                            </p>
                            <p>
                                Our mission: To motivate and inspire people to get living the life they deserve.
                                When you look for a property, it's not just a better home you seek, it's a better future.
                                Unlock Your Potential</p>

                        </div>
                        <div className="col-md-6">
                            <div className="blur-shadow-image text-center">
                                <img style={{ borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px' }} src={AbtImg} alt="img-blur-shadow" className="img-fluid shadow border-radius-lg max-height-600" />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}
export default AboutUs