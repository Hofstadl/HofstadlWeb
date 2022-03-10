import React, { useState, useContext } from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import * as locales from "react-date-range/dist/locale";
import { I18nextContext } from "gatsby-plugin-react-i18next";

export default function DateRangePicker({ data, room, setRoom }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [open, setOpen] = useState(false);

  const context = useContext(I18nextContext);

  var getDaysArray = function (start, end) {
    end.setDate(end.getDate());
    for (
      var arr = [], dt = new Date(start);
      dt < end;
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  var roomCalendar = 1,
    apartmentCalendar = 0;
  var calendars = data.allCalendar?.edges;

  if (calendars[0]?.node?.summary === "Zimmer") {
    roomCalendar = 0;
    apartmentCalendar = 1;
  }

  var roomEvents = calendars[roomCalendar]?.node?.children ?? [];
  var apartmentEvents = calendars[apartmentCalendar]?.node.children ?? [];


  if (roomEvents.length === 0 || apartmentEvents.length === 0) {
    console.warn("Google calender connection failed");
  }

  const disableBookedDates = () => {
    var datesToProcess = [];
    if (room) {
      for (let i = 0; i < roomEvents.length; i++) {
        datesToProcess.push(
          getDaysArray(
            new Date(roomEvents[i].start.dateTime),
            new Date(roomEvents[i].end.dateTime)
          )
        );
      }
    } else {
      for (let i = 0; i < apartmentEvents.length; i++) {
        datesToProcess.push(
          getDaysArray(
            new Date(apartmentEvents[i].start.dateTime),
            new Date(apartmentEvents[i].end.dateTime)
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
      <div className="items-center">
        <button
          className="flex h-10 w-40 rounded-2xl shadow-inner shadow-neutral-200"
          onClick={() => setOpen(!open)}
        >
          Dauer Auswählen
        </button>
        {open && (
          <div className="flex justify-center">
            <DateRange
              disabledDates={disableBookedDates()}
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              locale={locales[applyLanguage()]}
              minDate={new Date()}
            />
          </div>
        )}
      </div>
    </>
  );
}
