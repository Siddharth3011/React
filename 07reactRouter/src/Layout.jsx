//here we learn how to make the layout same when changing the page.
//means header and footer will be same but the content between them will change means when we go to home page it shows content of home page if we go to contact it shows the contact of that page.
import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom"; //for these things we had import outlet
import Footer from "./components/Footer/Footer";

function Layout() {
    return(
        <>
        <Header/>
        <Outlet/> {/*and declared between the header and footer */}
        <Footer/>
        </>
    )
}

export default Layout