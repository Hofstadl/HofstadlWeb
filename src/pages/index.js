import { graphql } from "gatsby";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import ActivitySlider from "../components/ActivitySlider";
import RequestForm from "../components/RequestForm/RequestForm";
import FacebookIcon from "../data/icons/FacebookIcon";
import InstagramIcon from "../data/icons/InstagramIcon";
import TwitterIcon from "../data/icons/TwitterIcon";
import ArrowRight from "../data/icons/ArrowRight";
import hofstadlHero from "../data/images/start/hofstadlHero.png";
import kueche from "../data/images/start/kuecheStartseite.jpg";
import spielzimmer from "../data/images/start/spielzimmer.jpg";
import zimmer from "../data/images/start/zimmerStartseite.jpg";
import hofstadlAussen from "../data/images/readme/hofstadl.jpg";

export default function Start({ data, summary }) {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero section starts here */}
      <section className="body-font flex justify-center bg-white dark:bg-neutral-900 dark:text-gray-400">
        <div className="flex h-[calc(100vh-5rem)] w-full max-w-[1800px] flex-col items-center md:h-[calc(100vh-6rem)] md:flex-row">
          {/* Left section starts here */}
          <div className="container mb-8 flex flex-col items-center justify-center px-10 py-6 text-center md:mb-0 md:h-full md:w-[50vw] md:items-start md:text-left lg:flex-grow lg:pl-20">
            <h1 className="title-font mb-4 text-3xl font-medium text-black dark:text-white sm:text-4xl">
              {t("welcome").split("-")[0]} <br />-{t("welcome").split("-")[1]}{" "}
              <span className="text-green">Waldviertel</span>
            </h1>
            <p className="mb-8 leading-relaxed">{t("welcome1")}</p>
            <br />
            <p className="mb-8 hidden leading-relaxed 2xl:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Est
              placerat in egestas erat. Non sodales neque sodales ut etiam sit.
            </p>
            <RequestForm data={data} />
          </div>
          {/* Right section starts here */}
          <div className="flex max-h-full w-full flex-col justify-center md:h-[74%] md:w-[50vw] lg:h-full 2xl:pr-10">
            <img
              className="h-auto max-h-full w-auto rounded-2xl bg-blue object-cover object-center md:h-[90%] md:rounded-br-none md:rounded-tr-none md:rounded-tl-3xl 2xl:rounded-3xl"
              alt="hero"
              src={hofstadlHero}
            />
            <div className="absolute right-0 top-[50%] items-center space-y-4 rounded-tl-2xl rounded-bl-2xl bg-white bg-opacity-[20%] p-2 text-black backdrop-blur-[1px]">
              <FacebookIcon className="h-6 w-6 fill-white" />
              <InstagramIcon className="h-6 w-6 fill-white" />
              <TwitterIcon className="h-6 w-6 fill-white" />
            </div>
          </div>
        </div>
      </section>

      {/* BENÖTIGT MAN VIELLEICHT NICHT, WENN BILD OBEN GEÄNDERT */}
      <div className="mb-96 md:mb-1"></div>
      {/* Allgemein Section starts here */}
      <section class="body-font overflow-hidden text-gray-600">
        <div class="mx-auto flex flex-col-reverse flex-wrap items-center px-5 py-24 md:mx-0 md:flex-row md:px-0">
          <div class="-m-1 flex flex-col-reverse items-center md:-m-2 md:flex-row">
            <div className="flex h-full w-full flex-row md:w-1/2">
              <div class="w-full p-1 md:p-2">
                <div className="mx-auto h-10 w-1/2 rounded-t-lg bg-blue bg-opacity-30 md:mx-0 md:w-2/3"></div>
                <img
                  alt="gallery"
                  class="h-full w-full rounded object-cover object-center drop-shadow-xl md:rounded-r-lg"
                  src={hofstadlAussen}
                />
              </div>
            </div>
            <div className="mx-auto flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-10 md:pr-10 md:text-left lg:flex-grow lg:pl-10">
              <p className="text-green">{t("general").toUpperCase()}</p>
              <h1 className="title-font mb-4 text-3xl font-medium text-black dark:text-white sm:text-4xl">
                Familie Liebahart begrüßt Sie im Hofstadl
              </h1>
              <p>
                Durch unsere ruhige Lage ist unser Hofstadl der perfekte
                Rückzugsort zu jeder Jahreszeit. Ganz besonders unsere Tiere und
                unser großer Spielraum begeistern unsere jungen Gäste.
              </p>
              <div className="mb-5"></div>

              <nav className="flex flex-row space-x-3">
                <Link
                  className="flex space-x-3 text-gray-600 hover:text-black dark:text-white"
                  to="/contact/"
                >
                  <p className="text-green">Mehr</p>
                  <ArrowRight className="fill-full h-7 w-10 stroke-green" />
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* rooms & aparatments section starts here */}
      <section class="body-font overflow-hidden text-gray-600">
        <div class="mx-auto flex flex-col flex-wrap items-center px-5 py-24 md:mx-0 md:flex-row md:px-0">
          <div class="-m-1 flex flex-col items-center md:-m-2 md:flex-row">
            <div className="mx-auto flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-10 md:pr-10 md:text-left lg:flex-grow lg:pl-10">
              <p className="text-green">{t("rooms-apartments").toUpperCase()}</p>
              <h1 className="title-font mb-4 text-3xl font-medium text-black dark:text-white sm:text-4xl">
                Das beste für unsere Gäste
              </h1>
              <p>
                Wir verfügen über insgesamt 3 Wohnungen und 3 Zimmern, in denen
                unsere Gäste ihren Aufenthalt genießen können. Ebenfalls bieten
                wir gratis WLAN im gesamten Gebäude, Parkplätze hinter und vor
                dem Haus und Fernseher in jeder Wohnung/Zimmer an.
              </p>
              <div className="mb-5"></div>
              <nav className="flex flex-row space-x-3">
                <Link
                  className="flex space-x-3 text-gray-600 hover:text-black dark:text-white"
                  to="/rooms-apartments/"
                >
                  <p className="text-green">Mehr</p>
                  <ArrowRight className="fill-full h-7 w-10 stroke-green" />
                </Link>
              </nav>
            </div>
            <div className="mb-5 md:mb-0"></div>
            <div className="flex w-full flex-row md:w-1/2">
              <div class="flex w-full flex-col flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="h-full w-full rounded-md object-cover object-center drop-shadow-xl"
                    src={zimmer}
                  />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class=" h-full w-full rounded-md object-cover object-center drop-shadow-xl"
                    src={spielzimmer}
                  />
                </div>
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="h-full w-full rounded object-cover object-center drop-shadow-xl md:rounded-l-lg"
                  src={kueche}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center">
          <p className="text-green">{t("activities").toUpperCase()}</p>
          <h1 className="title-font mb-4 text-3xl font-medium text-black dark:text-white sm:text-4xl">
            Beliebte Ausflugsziele in unserer Nähe
          </h1>
          <Link
            className="flex space-x-3 text-gray-600 hover:text-black dark:text-white"
            to="/activities/"
          >
            <p className="text-green">Mehr</p>
            <ArrowRight className="fill-full h-7 w-10 stroke-green" />
          </Link>
        </div>
        <ActivitySlider />
      </section>
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    allCalendar {
      edges {
        node {
          summary
          children {
            ... on CalendarEvent {
              summary
              start {
                dateTime
              }
              end {
                dateTime
              }
            }
          }
        }
      }
    }
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
