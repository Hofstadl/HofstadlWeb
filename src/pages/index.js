import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import Layout from "../components/Layout";
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

  console.log(data)

  return (
    <Layout>
      <div>{t("start")}</div>

        <div className="items-center">
            <DatePicker selected={startDate1} onChange={(date) => setStartDate1(date)} highlightDates={merged} locale={data.locales.edges[0].node.language} />
            <DatePicker selected={startDate2} onChange={(date) => setStartDate2(date)} highlightDates={merged} locale={data.locales.edges[0].node.language} />

            <button>button</button>
        </div>

    </Layout>
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
