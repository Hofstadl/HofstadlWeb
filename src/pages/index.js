import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import Layout from "../components/Layout";
import activities from "../data/activities";
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import de from 'date-fns/locale/de';
import cs from 'date-fns/locale/cs';
registerLocale('en', es)
registerLocale('de', de)
registerLocale('cz', cs)

export default function Start({data}) {

  const { t } = useTranslation();
  const [room, setRoom] = useState(false);
    const [startDate1, setStartDate1] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());

  var getDaysArray = function(start, end) {
      for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
          arr.push(new Date(dt));
      }
      return arr;
  };

  var array = data.allCalendarEvent.edges;
  var dates = [];

  for (let i = 0; i < array.length; i++) {
      dates.push(getDaysArray(new Date(array[i].node.start.dateTime), new Date(array[i].node.end.dateTime)));
  }

  var merged = [].concat.apply([], dates);

  var locale = data.locales.edges[0].node.language

  return (
    <>
      <div className="mt-32 relative">
        <h1 className="">Aktivitäten</h1>
      <ul className="mt-10 px-[5vw] w-full overflow-x-auto flex gap-8 snap-x">

      {activities.map(activity => (

      <h2 key={activity.id}>
        <li className="snap-center">
        <div className="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
            <img src={activity.photo} alt="bild" className="absolute inset-0 w-full h-full object-cover object-bottom"/>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-black/75"></div>
            <div className="relative h-96 w-[300px] p-4 flex flex-col justify-between items-start">
              <div></div>
              <div className="h-44 w-[267px] rounded-r-lg rounded-bl-lg bg-gradient-to-r from-white to-white tracking-tight space-y-1">          
              <svg className="w-5 h-5 dark:text-white" fill="none" stroke="currentColor" viewBox={activity.viewBox} xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={activity.d}></path></svg>

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
            <DatePicker selected={startDate1} onChange={(date) => setStartDate1(date)} highlightDates={merged} locale={locale} />
            <DatePicker selected={startDate2} onChange={(date) => setStartDate2(date)} highlightDates={merged} locale={locale} />

            <button>button</button>
        </div>
      </div>
      </>
  );
}

export const query = graphql`
  query ($language: String!) {
    allCalendarEvent {
      edges {
        node {
          summary
          start {
            dateTime
            timeZone
          }
          end {
            dateTime
            timeZone
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
