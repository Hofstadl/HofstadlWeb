import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import Layout from "../components/Layout";
import activities from "../data/activities";
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import de from 'date-fns/locale/de';
import cs from 'date-fns/locale/cs';
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
registerLocale('en', es)
registerLocale('de', de)
registerLocale('cz', cs)



export default function Start({data}) {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

  const { t } = useTranslation();

  var getDaysArray = function(start, end) {
      for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
          arr.push(new Date(dt));
      }
      return arr;
  };

  var zimmer
  var ferienwohnungen



  if(data.allCalendar.edges[0].node.summary === 'Zimmer') {
      zimmer = data.allCalendar.edges[0].node.children
      ferienwohnungen = data.allCalendar.edges[1].node.children
  } else {
      zimmer = data.allCalendar.edges[1].node.children
      ferienwohnungen = data.allCalendar.edges[0].node.children
  }

    console.log(zimmer)
    console.log(ferienwohnungen)

  /*for (let i = 0; i < array.length; i++) {
      dates.push(getDaysArray(new Date(array[i].node.start.dateTime), new Date(array[i].node.end.dateTime)));
  }*/


    const [enabled, setEnabled] = useState(false)

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

            <Switch.Group>
                <div className="flex items-center">
                    <Switch.Label className="mr-4">FerienWohnungen</Switch.Label>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                            enabled ? 'bg-blue-600' : 'bg-gray-200'
                        } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    >
          <span
              className={`${
                  enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
                    </Switch>
                </div>
            </Switch.Group>


            <DateRangePicker
                locale={es}
                onChange={item => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
            />
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
