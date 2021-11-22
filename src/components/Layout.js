import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import MuiWrapper from "./MuiWrapper"
import Footer from "./Footer"

export default function Layout({children}) {
    return (
        <div
        className={"bg-beige"}>
        <MuiWrapper>
            <Navbar/>
                {children}
            <Footer/>
        </MuiWrapper>
        </div>
    )
}
