import { graphql } from "gatsby";
import { Switch } from "@headlessui/react";
import Layout from "../components/Layout";
import hofstadlHero from "../data/images/start/hofstadlHero.png";
import InstagramIcon from "../data/icons/InstagramIcon";
import FacebookIcon from "../data/icons/FacebookIcon";
import TwitterIcon from "../data/icons/TwitterIcon";
import {
    I18nextContext,
    useTranslation,
} from "gatsby-plugin-react-i18next";
import React, {useState, useContext} from "react";
import activities from "../data/activities";
import {addDays} from 'date-fns';
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import * as locales from 'react-date-range/dist/locale';

export default function Start({data}) {
  const [state, setState] = useState([
    {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
    }
]);

const {t} = useTranslation();

const context = useContext(I18nextContext);

var getDaysArray = function (start, end) {
    end.setDate(end.getDate() - 1)
    for (var arr = [], dt = new Date(start); dt < end; dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt));
    }
    return arr;
};

var zimmer
var ferienwohnungen

if (data.allCalendar.edges[0].node.summary === 'Zimmer') {
    zimmer = data.allCalendar.edges[0].node.children
    ferienwohnungen = data.allCalendar.edges[1].node.children
} else {
    zimmer = data.allCalendar.edges[1].node.children
    ferienwohnungen = data.allCalendar.edges[0].node.children
}

const [room, setRoom] = useState(true);
const disableBookedDates = () => {

    var datesToProcess = []
    if (room) {
        for (let i = 0; i < zimmer.length; i++) {
            datesToProcess.push(getDaysArray(new Date(zimmer[i].start.dateTime), new Date(zimmer[i].end.dateTime)));
        }
    } else {
        for (let i = 0; i < ferienwohnungen.length; i++) {
            datesToProcess.push(getDaysArray(new Date(ferienwohnungen[i].start.dateTime), new Date(ferienwohnungen[i].end.dateTime)));
        }
    }

    var datesToProcessFlat = [].concat.apply([], datesToProcess);

    for (let i = 0; i < datesToProcessFlat.length; i++) {
        datesToProcessFlat[i].setHours(3, 3, 3, 3);
    }

    const count = {};

    var datesToDisable = []
    for (const day of datesToProcessFlat) {
        if (count[day]) {
            count[day] += 1;
            if (count[day] === 3) {
                datesToDisable.push(day)
            }
        } else {
            count[day] = 1;
        }
    }

    return datesToDisable;
}

const applyLanguage = () => {
    if (context.language === "cz") {
        return "cs"
    } else if (context.language === "en") {
        return "enGB"
    } else {
        return "de"
    }
}

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

      <div className="mt-32 relative">
                <h1 className="">Aktivitäten</h1>
                <ul className="mt-10 px-[5vw] w-full overflow-x-auto flex gap-8 snap-x">

                    {activities.map(activity => (

                        <h2 key={activity.id}>
                            <li className="snap-center">
                                <div className="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
                                    <img src={activity.photo} alt="bild"
                                         className="absolute inset-0 w-full h-full object-cover object-bottom"/>
                                    <div
                                        className="absolute inset-0 h-full w-full bg-gradient-to-tr from-black/75"></div>
                                    <div
                                        className="relative h-96 w-[300px] p-4 flex flex-col justify-between items-start">
                                        <div></div>
                                        <div
                                            className="h-44 w-[267px] rounded-r-lg rounded-bl-lg bg-gradient-to-r from-white to-white tracking-tight space-y-1">
                                            <svg className="w-5 h-5 dark:text-white" fill="none" stroke="currentColor"
                                                 viewBox={activity.viewBox} xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d={activity.d}></path>
                                            </svg>

                                            <h2 className="px-4 rounded-lg text-slate-900 flex justify-center leading-4 italic text-lg font-bold">
                                                {activity.name}
                                            </h2>
                                            <h2 className="px-4  rounded-lg text-slate-600 flex justify-center leading-4 text-center text-sm font-light">
                                                {activity.destination}
                                            </h2>
                                            <h2 className="px-4 rounded-lg text-slate-900 flex justify-center leading-4 text-center text-sm font-medium">
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
                            onChange={item => setState([item.selection])}
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
