import React from "react";
import Nav from "./nav";
import AbtImg from './images/company-img.png';
import Footer from "./footer";
import SecondImage from './images/company-img-1.png';
import FirstImage from './images/company-img-2.png';
import PartnersMain from "./partners";
import Testimonials from "./testimonials";
import FourthImage from './images/company-img-3.png';


const AboutUs = () => {

    return (
        <>
            <Nav />

            <section className="">
                <div className="container py-5">
                    <div className="row align-items-center">

                        <div className="col-sm-7 col-xs-12 mt-2 mb-2">
                        <div style={{ marginRight: '' }}>

                            <h1 className="text-gradient primary-text">About BrokkerSpot</h1>
                            {/* <h4>Very nice subtitle</h4> */}
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
                        <div className="col-sm-5 col-xs-12">
                            <div className="blur-shadow-image text-center">
                                <img src={AbtImg} alt="img-blur-shadow" className="img-fluid  border-radius-lg max-height-600" />
                            </div>
                        </div>

                    </div>
                    <div className="row align-items-center mt-3">
                        <div className="col-sm-5 col-xs-12">
                            <div className="blur-shadow-image text-center">
                                <img src={SecondImage} alt="img-blur-shadow" className="img-fluid  border-radius-lg max-height-600" />
                            </div>
                        </div>
                        <div className="col-sm-7  mb-2 mt-2">
                            
                            <div style={{ marginLeft: '' }}>
                                <h1 className="text-gradient primary-text">Heading 2</h1>

                                <p className="mb-md-5 mb-2">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the ind
ustry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy  text of the printing and 
typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s,Lore
m Ipsum is simply dummy text of the printing and typeset ting industry. Lorem Ipsum has been the indust
ry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and type
setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ip
sum is simply dummy text of the printing and type setting industry. Lorem Ipsum hasbeen the industrys sta
ndard dummy text ever since the 1500s,
                                </p>
                            </div>

                        </div>


                    </div>
                    <div className="row align-items-center mt-3">

                        <div className="col-sm-7 col-xs-12 mt-2 mb-2">
                        <div style={{ marginRight: '' }}>

                            <h1 className="text-gradient primary-text">Heading 3</h1>
                            <p className="mb-md-5 mb-2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the ind
ustry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy  text of the printing and 
typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s,Lore
m Ipsum is simply dummy text of the printing and typeset ting industry. Lorem Ipsum has been the indust
ry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and type
setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ip
sum is simply dummy text of the printing and type setting industry. Lorem Ipsum hasbeen the industrys sta
ndard dummy text ever since the 1500s,
                            </p>
</div>

                        </div>
                        <div className="col-sm-5 col-xs-12">
                            <div className="blur-shadow-image text-center">
                                <img src={FirstImage} alt="img-blur-shadow" className="img-fluid  border-radius-lg max-height-600" />
                            </div>
                        </div>

                    </div>
                    <div className="row align-items-center mt-3">
                        <div className="col-sm-5 col-xs-12">
                            <div className="blur-shadow-image text-center">
                                <img src={FourthImage} alt="img-blur-shadow" className="img-fluid  border-radius-lg max-height-600" />
                            </div>
                        </div>
                        <div className="col-sm-7  mb-2 mt-2">
                            <div style={{ marginLeft: '' }}>
                                <h1 className="text-gradient primary-text">Heading 2</h1>

                                <p className="mb-md-5 mb-2">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the ind
ustry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy  text of the printing and 
typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s,Lore
m Ipsum is simply dummy text of the printing and typeset ting industry. Lorem Ipsum has been the indust
ry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and type
setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ip
sum is simply dummy text of the printing and type setting industry. Lorem Ipsum hasbeen the industrys sta
ndard dummy text ever since the 1500s,
                                </p>
                            </div>

                        </div>


                    </div>

                </div>
            </section>
            <PartnersMain />
            <Testimonials />
            <Footer />
        </>
    )
}
export default AboutUs