import { graphql } from "gatsby";
import { Switch } from "@headlessui/react";
import Layout from "../components/Layout";
import hofstadlHero from "../data/images/start/hofstadlHero.png";
import InstagramIcon from "../data/icons/InstagramIcon";
import FacebookIcon from "../data/icons/FacebookIcon";
import TwitterIcon from "../data/icons/TwitterIcon";
import { I18nextContext, useTranslation } from "gatsby-plugin-react-i18next";
import React, { useState, useContext } from "react";
import activities from "../data/activities";
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import * as locales from "react-date-range/dist/locale";
import RequestForm from "../components/RequestForm/RequestForm"

export default function Start({ data }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const { t } = useTranslation();
  const [persons, setPersons] = useState(1);
  const context = useContext(I18nextContext);

  var getDaysArray = function (start, end) {
    end.setDate(end.getDate() - 1);
    for (
      var arr = [], dt = new Date(start);
      dt < end;
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  var zimmer;
  var ferienwohnungen;

  if (data.allCalendar.edges[0].node.summary === "Zimmer") {
    zimmer = data.allCalendar.edges[0].node.children;
    ferienwohnungen = data.allCalendar.edges[1].node.children;
  } else {
    zimmer = data.allCalendar.edges[1].node.children;
    ferienwohnungen = data.allCalendar.edges[0].node.children;
  }

  const [room, setRoom] = useState(true);
  const disableBookedDates = () => {
    var datesToProcess = [];
    if (room) {
      for (let i = 0; i < zimmer.length; i++) {
        datesToProcess.push(
          getDaysArray(
            new Date(zimmer[i].start.dateTime),
            new Date(zimmer[i].end.dateTime)
          )
        );
      }
    } else {
      for (let i = 0; i < ferienwohnungen.length; i++) {
        datesToProcess.push(
          getDaysArray(
            new Date(ferienwohnungen[i].start.dateTime),
            new Date(ferienwohnungen[i].end.dateTime)
          )
        );
      }
    }

    var datesToProcessFlat = [].concat.apply([], datesToProcess);

    for (let i = 0; i < datesToProcessFlat.length; i++) {
      datesToProcessFlat[i].setHours(3, 3, 3, 3);
    }

    const count = {};

    var datesToDisable = [];
    for (const day of datesToProcessFlat) {
      if (count[day]) {
        count[day] += 1;
        if (count[day] === 3) {
          datesToDisable.push(day);
        }
      } else {
        count[day] = 1;
      }
    }

    return datesToDisable;
  };

  const applyLanguage = () => {
    if (context.language === "cz") {
      return "cs";
    } else if (context.language === "en") {
      return "enGB";
    } else {
      return "de";
    }
  };

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
            <p className="mb-8 leading-relaxed">{t("welcome1")}</p>
            <RequestForm/>
          </div>
          {/* Right section starts here */}
          <div className="flex w-full flex-col justify-center md:h-[74%] md:w-[50vw] lg:h-full">
            <img
              className="h-[50vh] w-full rounded-2xl bg-blue object-cover object-center md:h-[90%] md:rounded-br-none md:rounded-tr-none md:rounded-tl-3xl"
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
      <div className="h-screen"></div>

      <div className="relative mt-32">
        <h1 className="">Aktivitäten</h1>
        <ul className="mt-10 flex w-full snap-x gap-8 overflow-x-auto px-[5vw]">
          {activities.map((activity) => (
            <h2 key={activity.id}>
              <li className="snap-center">
                <div className="relative max-w-[95vw] flex-shrink-0 overflow-hidden rounded-3xl">
                  <img
                    src={activity.photo}
                    alt="bild"
                    className="absolute inset-0 h-full w-full object-cover object-bottom"
                  />
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-black/75"></div>
                  <div className="relative flex h-96 w-[300px] flex-col items-start justify-between p-4">
                    <div></div>
                    <div className="h-44 w-[267px] space-y-1 rounded-r-lg rounded-bl-lg bg-gradient-to-r from-white to-white tracking-tight">
                      <svg
                        className="h-5 w-5 dark:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox={activity.viewBox}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d={activity.d}
                        ></path>
                      </svg>

                      <h2 className="flex justify-center rounded-lg px-4 text-lg font-bold italic leading-4 text-slate-900">
                        {activity.name}
                      </h2>
                      <h2 className="flex  justify-center rounded-lg px-4 text-center text-sm font-light leading-4 text-slate-600">
                        {activity.destination}
                      </h2>
                      <h2 className="flex justify-center rounded-lg px-4 text-center text-sm font-medium leading-4 text-slate-900">
                        {activity.description}
                      </h2>
                    </div>
                  </div>
                </div>
              </li>
            </h2>
          ))}
        </ul>
      </div>

      <div>
        <div>{t("start")}</div>

        <div className="items-center">
          <div className="flex justify-center">
            <DateRange
              disabledDates={disableBookedDates()}
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              locale={locales[applyLanguage()]}
            />
          </div>
        </div>
      </div>
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
