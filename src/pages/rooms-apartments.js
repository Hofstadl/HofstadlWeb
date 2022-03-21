import React, { useState, useEffect, useRef } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import NextIcon from "../data/icons/NextIcon";
import PrevisiousIcon from "../data/icons/PrevisiousIcon";
import ferienwohnung_Kueche1 from "../data/images/start/ferienwohnung_Kueche1.jpg";
import ferienwohnung_Kueche2 from "../data/images/start/ferienwohnung_Kueche2.jpg";
import ferienwohnung_Zimmer1 from "../data/images/start/ferienwohnung_Zimmer1.jpg";
import ferienwohnung_Zimmer2 from "../data/images/start/ferienwohnung_Zimmer2.jpg";
import badezimmer from "../data/images/start/badezimmer.jpg";
import zimmer1 from "../data/images/start/zimmer1.jpg";
import zimmer2 from "../data/images/start/zimmer2.jpg";
import zimmer3 from "../data/images/start/zimmer3.jpg";
import Layout from "../components/Layout";

export default function RoomsApartments() {
  const { t } = useTranslation();
  const zimmerArray = [zimmer3, zimmer1, zimmer2, badezimmer];
  const ferienwohnungArray = [
    ferienwohnung_Zimmer2,
    ferienwohnung_Zimmer1,
    ferienwohnung_Kueche1,
    ferienwohnung_Kueche2,
    badezimmer,
  ];
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
        <div className="mx-auto h-10 w-2/3 rounded-t-lg bg-blue bg-opacity-30 md:mx-0 md:w-1/3"></div>
        <div
          ref={slideRef}
          className="mx-auto flex flex-col items-center px-4 md:mx-0 md:flex-row md:px-0"
        >
          <div className="w-full md:w-1/2">
            <img
              className="object-cover object-center md:rounded-r-lg"
              src={zimmerArray[currentIndex]}
              alt="Foto"
            />
            <div className="flex -translate-y-1/4 items-center justify-between px-3">
              <button
                onClick={() =>
                  handleOnPrevClick(
                    ferienwohnungArray,
                    setCurrentIndex,
                    currentIndex
                  )
                }
              >
                <PrevisiousIcon className="h-7 w-7 rounded-full bg-blue bg-opacity-80 fill-transparent stroke-black stroke-2"></PrevisiousIcon>
              </button>

              <button
                onClick={() =>
                  handleOnNextClick(zimmerArray, setCurrentIndex, currentIndex)
                }
              >
                <NextIcon className="h-7 w-7 rounded-full bg-blue bg-opacity-80 fill-transparent stroke-black stroke-2"></NextIcon>
              </button>
            </div>
          </div>
          <div className="hidden h-52 w-20 rounded-r-lg bg-blue bg-opacity-30 md:block"></div>

          <div className="mx-auto flex flex-col items-center text-center  md:w-1/2 md:items-start md:pl-10 md:pr-5 md:text-left lg:flex-grow lg:pl-10 lg:pr-5">
            <h1 className="title-font mb-4 text-3xl font-medium text-black dark:text-white sm:text-4xl">
              Zimmer
            </h1>

            <p>
              Unsere Zimmer verfügen über ein großes gemütliches Doppelbett für
              2 Personen mit eigenem Bad und Balkon beziehungsweise Terrasse.
              Bei Bedarf kann noch ein extra Zustellbett zur Verfügung gestellt
              werden. In der großen Hofküche können Sie das Frühstück genießen,
              um perfekt in den Tag zu starten.
            </p>
          </div>
        </div>
      </section>
      <div className="mb-10"></div>

      <section className="body-font bg-white dark:bg-neutral-900 dark:text-gray-400">
        <div
          ref={slideRef}
          className="mx-auto flex flex-col-reverse items-center px-4 md:mx-0 md:flex-row md:px-0"
        >
          <div className="mx-auto flex flex-col items-center text-center  md:w-1/2 md:items-start md:pl-10 md:pr-5 md:text-left lg:flex-grow lg:pl-10">
            <h1 className="title-font mb-4 text-3xl font-medium text-black dark:text-white sm:text-4xl">
              Ferienwohnungen
            </h1>

            <p>
              Unsere Ferienwohnungen verfügen über zwei Zimmer mit einem großen
              Doppelbett. In der Wohnküche gibt es zusätzlich noch eine
              Ausziehcouch, die bei Bedarf bezogen werden kann. Jede Wohnung hat
              ein ausgestattetes Bad und einen Balkon beziehungsweise eine
              Terrasse.
            </p>
          </div>
          <div className="hidden h-52 w-20 rounded-l-lg bg-blue bg-opacity-30 md:block"></div>
          <div className="w-full md:w-1/2">
            <div className="md:w-6/7 mx-auto h-10 w-2/3 rounded-t-lg bg-blue bg-opacity-30 md:mx-0 md:ml-auto"></div>
            <img
              className="object-cover object-center md:rounded-l-lg"
              src={ferienwohnungArray[currentIndex2]}
              alt="Foto"
            />
            <div className="flex -translate-y-1/4 items-center justify-between px-3">
              <button
                onClick={() =>
                  handleOnPrevClick(
                    ferienwohnungArray,
                    setCurrentIndex2,
                    currentIndex2
                  )
                }
              >
                <PrevisiousIcon className="h-7 w-7 rounded-full bg-blue bg-opacity-80 fill-transparent stroke-black stroke-2"></PrevisiousIcon>
              </button>

              <button
                onClick={() =>
                  handleOnNextClick(
                    ferienwohnungArray,
                    setCurrentIndex2,
                    currentIndex2
                  )
                }
              >
                <NextIcon className="h-7 w-7 rounded-full bg-blue bg-opacity-80 fill-transparent stroke-black stroke-2"></NextIcon>
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
