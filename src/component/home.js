import React, { useEffect, useState } from "react";
import Nav from "./nav";
import Banner from "./banner";
import InnerPage from "./carouselsMain";
import PartnersPage from "./partners";
import Testimonials from "./testimonials";
import Appdownloads from "./appdownload";
import Footer from "./footer";
import { getBannerApi } from "./actioncreator";

const HomePage = () => {
    const [DAMACData, setDAMAC] = useState('')
    useEffect(() => {
        getDamacData()

    }, [])
    const getDamacData = () => {
        getBannerApi(callback => {
            console.log(callback)
            setDAMAC(callback)
        })
    }
    return (
        <div>
            <Nav />
            <Banner />
            <InnerPage DAMACData={DAMACData} />
            <PartnersPage />
            <Testimonials />
            <Appdownloads />
            <Footer />
        </div>
    )
}
export default HomePage