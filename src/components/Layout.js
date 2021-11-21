import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import MuiWrapper from "./MuiWrapper";

export default function Layout({children}) {
    return (
        <MuiWrapper>
            <Navbar/>
                {children}
            <footer>Copyright</footer>
        </MuiWrapper>
    )
}
