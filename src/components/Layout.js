import React from "react";
import Navbar from "./Navbar/Navbar";
import "../styles/global.css";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={"h-20 dark:bg-black md:h-24"} />
      {children}
      <Footer />
    </>
  );
}
