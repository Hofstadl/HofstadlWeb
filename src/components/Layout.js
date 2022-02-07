import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={"h-24"} />
      {children}
      <Footer />
    </>
  );
}
