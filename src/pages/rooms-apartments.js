import React, { useState, useEffect, useRef } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import NextIcon from "../data/icons/NextIcon";
import PrevisiousIcon from "../data/icons/PrevisiousIcon";
import bild1 from "../data/images/start/ottenstein.jpg";
import bild2 from "../data/images/start/rosenburg.jpg";
import bild3 from "../data/images/start/ottenstein.jpg";
import bild4 from "../data/images/start/Download.jpg";
import bild5 from "../data/images/start/schlafzimmer.jpg";
import bild6 from "../data/images/start/zimmer.jpg";
import Layout from "../components/Layout";

export default function RoomsApartments() {
  const { t } = useTranslation();
  const zimmerArray = [bild1, bild2, bild3];
  const ferienwohnungArray = [bild4, bild5, bild6, bild1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const slideRef = useRef();
  let count = 0;
  let slideInterval;

  const handleOnNextClick = (array, setCurrentIndex, currentIndex) => {
    const productsLength = array.length;
    count = (currentIndex + productsLength + 1) % productsLength;
    setCurrentIndex(count);
  };

  const handleOnPrevClick = (array, setCurrentIndex, currentIndex) => {
    const productsLength = array.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  /*const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);*/

  return (
    <Layout>
      <section className="body-font bg-white dark:bg-neutral-900 dark:text-gray-400 ">
        <div>
          <div className="h-10 w-2/5 rounded-t-lg bg-blue bg-opacity-30"></div>
          <div ref={slideRef} className="block items-center md:flex">
            <img
              className="h-[25vh] w-full md:h-[50vh] md:w-[200%] md:rounded-r-lg"
              src={zimmerArray[currentIndex]}
              alt="Foto"
            />
            <div className="y-[50%] space-x-1/2 relative flex -translate-y-1/4 transform items-start justify-between px-3 md:absolute">
              <button
                onClick={() =>
                  handleOnNextClick(zimmerArray, setCurrentIndex, currentIndex)
                }
              >
                <PrevisiousIcon className="h-5 w-5 rounded-full bg-white fill-transparent stroke-black stroke-2"></PrevisiousIcon>
              </button>

              <button
                onClick={() =>
                  handleOnPrevClick(zimmerArray, setCurrentIndex, currentIndex)
                }
              >
                <NextIcon className="h-5 w-5 rounded-full bg-white fill-transparent stroke-black stroke-2"></NextIcon>
              </button>
            </div>
            <div className="hidden h-64 w-20 rounded-r-lg bg-blue bg-opacity-30 md:block"></div>

            <div className="ml-20 mr-20">
              <h1 className="title-font mb-4 text-3xl font-medium text-black dark:text-white sm:text-4xl">
                Zimmer
              </h1>

              <p>
                Unsere Zimmer verfügen über ein großes gemütliches Doppelbett
                für 2 Personen mit eigenem Bad und Balkon beziehungsweise
                Terrasse. Bei Bedarf kann noch ein extra Zustellbett zur
                Verfügung gestellt werden. In der großen Hofküche können Sie das
                Frühstück genießen, um perfekt in den Tag zu starten.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="body-font bg-white dark:bg-neutral-900 dark:text-gray-400">
        <div>
          <div className="y-40 ml-auto h-10 w-2/5 rounded-t-lg bg-blue bg-opacity-30"></div>
          <div ref={slideRef} className="block  items-center md:flex">
            <div className="ml-20 mr-20">
              <h1 className="title-font mb-4 text-3xl font-medium text-black dark:text-white sm:text-4xl">
                Ferienwohnungen
              </h1>

              <p>
                Unsere Ferienwohnungen verfügen über zwei Zimmer mit einem
                großen Doppelbett. In der Wohnküche gibt es zusätzlich noch eine
                Ausziehcouch, die bei Bedarf bezogen werden kann. Jede Wohnung
                hat ein ausgestattetes Bad und einen Balkon beziehungsweise eine
                Terrasse.
              </p>
            </div>
            <div className="hidden h-64 w-20 rounded-l-lg bg-blue bg-opacity-30 md:block"></div>
            <img
              className="h-[25vh] w-full md:h-[50vh] md:w-[200%] md:rounded-l-lg"
              src={ferienwohnungArray[currentIndex2]}
              alt="Foto"
            />
            <div className="y-[50%] space-x-1/2 relative ml-3 flex -translate-y-1/4 transform items-start justify-between px-3 md:absolute md:ml-80">
              <button
                onClick={() =>
                  handleOnNextClick(
                    ferienwohnungArray,
                    setCurrentIndex2,
                    currentIndex2
                  )
                }
              >
                <PrevisiousIcon className="h-5 w-5 rounded-full bg-white fill-transparent stroke-black stroke-2"></PrevisiousIcon>
              </button>

              <button
                onClick={() =>
                  handleOnPrevClick(
                    ferienwohnungArray,
                    setCurrentIndex2,
                    currentIndex2
                  )
                }
              >
                <NextIcon className="h-5 w-5 rounded-full bg-white fill-transparent stroke-black stroke-2"></NextIcon>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
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
