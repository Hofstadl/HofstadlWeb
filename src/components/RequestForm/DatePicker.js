import { DateRangePicker } from "@mantine/dates";
import { useMediaQuery } from "@mantine/hooks";
import dayjs from "dayjs";
import "dayjs/locale/cs";
import "dayjs/locale/de";
import "dayjs/locale/en";
import { I18nextContext, useTranslation } from "gatsby-plugin-react-i18next";
import React, { useContext } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import CalendarIcon from "../../data/icons/CalendarIcon";

export default function DatePicker({
  data,
  date,
  setDate,
  accomodation,
  isCalendarOpen,
  setIsCalendarOpen,
}) {
  const { t } = useTranslation();
  const context = useContext(I18nextContext);
  const isMobile = useMediaQuery("(max-width: 755px)");
  /*
  var getDaysArray = function (start, end) {
    setDate(end.getDate());
    for (
      var arr = [], dt = new Date(start);
      dt < end;
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    return arr;
  };*/

  const getDaysArray = (startDate, endDate) => {
    let datesBetween = [];

    while (!startDate.isSame(endDate)) {
      startDate = startDate.add(1, "day");
      datesBetween.push(startDate);
    }

    return datesBetween;
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
    if (accomodation === "room") {
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

    return Array.of(dayjs());
  };

  return (
    <>
      <DateRangePicker
        locale={context.language === "cz" ? "cs" : context.language}
        value={date}
        onChange={setDate}
        excludeDate={
          (date) =>
            console.info(
              "TODO: disable Google calendar dates"
            ) /*disableBookedDates().includes(date)*/
        }
        dayClassName={(date, modifiers) =>
          `${
            modifiers.weekend &&
            !dayjs().subtract(1, "day").isAfter(dayjs(date))
              ? "!text-green"
              : ""
          } ${dayjs().isSame(dayjs(date), "day") ? "underline" : ""}`
        }
        minDate={dayjs().toDate()}
        maxDate={dayjs().add(1, "year").toDate()}
        dropdownType={isMobile ? "modal" : "popover"}
        clearable={false}
        variant="unstyled"
        label={
          <p>
            {t("checkIn")} - {t("checkOut")}
          </p>
        }
        icon={<CalendarIcon />}
        allowLevelChange={false}
        zIndex={10}
        onDropdownOpen={() => setIsCalendarOpen(true)}
        onDropdownClose={() => setIsCalendarOpen(false)}
        inputFormat={context.language === "en" ? "MMM D, ddd" : "D. MMM, ddd"}
        className="w-full max-w-[290px] rounded-xl shadow-inner shadow-neutral-200"
        classNames={{
          inRange: "!bg-slate-200",
          selected:
            "!border-[1.5px] !border-solid !border-slate-200 !bg-transparent !text-black !font-medium",
          input: "text-center leading-none h-fit text-md",
          label:
            "flex justify-center mb-0 text-center font-sans text-xs text-gray-400",
          root: "p-3 items-center",
          wrapper: "items-center"
        }}
      />
    </>
  );
}
