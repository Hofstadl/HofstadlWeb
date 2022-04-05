import { MantineProvider } from "@mantine/core";
import React from "react";
import "../styles/global.css";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import SEO from "./SEO";

export default function Layout({ children }) {
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  return (
    <>
      <SEO />
      <MantineProvider
        theme={{
          colors: {
            "grass-green": [
              "#E9EAE7",
              "#D5D7D0",
              "#C2C7BA",
              "#B2B9A5",
              "#A4AF8F",
              "#97A77A",
              "#8DA364",
              "#7E8E5E",
              "#707C59",
              "#646C53",
              "#595F4D",
              "#505447",
              "#474B41",
            ],
            "sky-blue": [
              "#E0E7F0",
              "#BFD0E7",
              "#A6BAD6",
              "#92A7C3",
              "#8296B1",
              "#7587A0",
              "#6A7A8F",
              "#636E7D",
            ],
          },
        }}
      >
        <Navbar />
        <div className={"h-20 dark:bg-black md:h-24"} />
        {children}
        <Footer />
      </MantineProvider>
    </>
  );
}
