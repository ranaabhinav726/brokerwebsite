import React from "react";
import Nav from "./nav";
import Banner from "./banner";
import InnerPage from "./innerContent";

const HomePage=()=>{
    return(
        <div>
            <Nav/>
            <Banner/>
            <InnerPage/>
        </div>
    )
}
export default HomePage