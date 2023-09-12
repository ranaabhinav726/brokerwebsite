import React, { useEffect, useState } from "react";
import Nav from "./nav";
import Banner from "./banner";
import InnerPage from "./carouselsMain";
import PartnersPage from "./partners";
import Testimonials from "./testimonials";
import Appdownloads from "./appdownload";
import Footer from "./footer";
import { getBannerApi, getBannerSecondApi } from "./actioncreator";

const HomePage = () => {
    const [DAMACData, setDAMAC] = useState('')
    const [promotionDataState, setPromotionData] = useState('')

    useEffect(() => {
        getDamacData()
        promotionData()

    }, [])
    const getDamacData = () => {
        getBannerApi(callback => {
            console.log(callback)
            setDAMAC(callback)
        })
    }
    const promotionData =()=>{
        getBannerSecondApi(callback=>{
            setPromotionData(callback)
        })
    }
    return (
        <div>
            <Nav />
            <Banner />
            <InnerPage promotionDataState={promotionDataState} DAMACData={DAMACData} />
            <PartnersPage />
            <Testimonials />
            <Appdownloads />
            <Footer />
        </div>
    )
}
export default HomePage