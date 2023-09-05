import React from "react";
import Nav from "./nav";
import Banner from "./banner";
import InnerPage from "./carouselsMain";
import PartnersPage from "./partners";
import Testimonials from "./testimonials";
import Appdownloads from "./appdownload";
import Footer from "./footer";

const HomePage=()=>{
    return(
        <div>
            <Nav/>
            <Banner/>
            <InnerPage/>
            <PartnersPage />
            <Testimonials/>
            <Appdownloads />
            <Footer />
        </div>
    )
}
export default HomePage