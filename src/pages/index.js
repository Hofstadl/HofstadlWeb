import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import Layout from "../components/Layout";
import hofstadlHero from "../data/images/start/hofstadlHero.png";
import InstagramIcon from "../data/icons/InstagramIcon";
import FacebookIcon from "../data/icons/FacebookIcon";
import TwitterIcon from "../data/icons/TwitterIcon";

export default function Start() {
  const { t } = useTranslation();
  const [room, setRoom] = useState(false);

  return (
    <>
      {/* Hero section starts here */}
      <section className="body-font bg-white dark:bg-neutral-900 dark:text-gray-400">
        <div className="flex h-[calc(100vh-5rem)] w-full flex-col items-center md:h-[calc(100vh-6rem)] md:flex-row">
          {/* Left section starts here */}
          <div className="container mb-8 flex flex-col items-center justify-center px-10 py-6 text-center md:mb-0 md:h-full md:w-[50vw] md:items-start md:text-left lg:flex-grow">
            <h1 className="title-font mb-4 text-3xl font-medium text-black dark:text-white sm:text-4xl">
              {t("welcome").split("-")[0]} <br />-{t("welcome").split("-")[1]}{" "}
              <span className="text-green">Waldviertel</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                Room
              </button>
              <button className="ml-4 inline-flex rounded border-0 bg-gray-800 py-2 px-6 text-lg text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                Apartment
              </button>
              {/*
<Switch checked={room} onChange={setRoom}>
                <span className="flex h-20 w-56 rounded bg-white p-2 shadow">
                  <span className="z-0">Room</span>
                  <span
                    className={`z-10 block h-full w-1/2 transform rounded transition duration-300 ease-in-out ${
                      room ? "translate-x-full bg-blue" : "bg-red-500"
                    }`}
                  />
                </span>
                {room && "i am enabled!"}
                {!room && "i am not enabled!"}
              </Switch>
                */}
            </div>
          </div>
          {/* Right section starts here */}
          <div className="flex w-full flex-col justify-center md:h-[74%] md:w-[50vw] lg:h-full">
            <img
              className="h-[50vh] w-full rounded-2xl bg-blue object-cover object-center md:h-[90%] md:rounded-br-none md:rounded-tr-none md:rounded-tl-3xl"
              alt="hero"
              src={hofstadlHero}
            />
            <div className="absolute right-0 top-[50%] items-center space-y-4 rounded-tl-2xl rounded-bl-2xl bg-white bg-opacity-[20%] p-2 text-black backdrop-blur-3xl">
              <FacebookIcon className="h-6 w-6 fill-white" />
              <InstagramIcon className="h-6 w-6 fill-white" />
              <TwitterIcon className="h-6 w-6 fill-white" />
            </div>
          </div>
        </div>
      </section>
      <div className="h-screen"></div>
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
