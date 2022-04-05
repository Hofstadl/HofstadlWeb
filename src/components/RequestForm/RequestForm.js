import { Box, Center, SegmentedControl } from "@mantine/core";
import dayjs from "dayjs";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { useEffect, useState } from "react";
import ApartmentIcon from "../../data/icons/ApartmentIcon";
import RightArrowSmIcon from "../../data/icons/RightArrowSmIcon";
import RoomIcon from "../../data/icons/RoomIcon";
import DatePicker from "./DatePicker";
import NameField from "./NameField";
import PersonsSelector from "./PersonsSelector";

export default function RequestForm({ data }) {
  const { t } = useTranslation();
  const [accomodation, setAccomodation] = useState("room");
  const [persons, setPersons] = useState(2);
  const [date, setDate] = useState([
    new Date(),
    dayjs().add(7, "day").toDate(),
  ]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  /* useEffect(() => {
    if (!isCalendarOpen) {
      setDate([
        date[0] ?? new Date(),
        date[1] ??
          dayjs(date[0]).add(7, "day").toDate() ??
          dayjs().add(7, "day").toDate(),
      ]);
    }
  }, [isCalendarOpen]); */

  useEffect(() => {}, [date]);

  const roomApartmentData = [
    {
      value: "room",
      label: (
        <Center>
          <RoomIcon />
          <Box ml={10}>{t("room")}</Box>
        </Center>
      ),
    },
    {
      value: "apartment",
      label: (
        <Center>
          <ApartmentIcon />
          <Box ml={10}>{t("apartment")}</Box>
        </Center>
      ),
    },
  ];

  return (
    <div className="flex w-full flex-col justify-center space-y-4">
      <div>
        <SegmentedControl
          data={roomApartmentData}
          size="sm"
          transitionDuration={500}
          transitionTimingFunction="linear"
          className="rounded-xl bg-white shadow-inner shadow-neutral-200"
          classNames={{
            active: "bg-lightblue opacity-20 rounded-xl",
          }}
          color="white"
          value={accomodation}
          onChange={setAccomodation}
          fullWidth={true}
        />
      </div>
      <div className="flex flex-col justify-between space-y-4 xl:flex-row xl:space-y-0">
        <NameField />
        <div className="flex space-x-2">
          <PersonsSelector
            persons={persons}
            setPersons={setPersons}
            accomodation={accomodation}
          />
          <DatePicker
            data={data}
            date={date}
            setDate={setDate}
            accomodation={accomodation}
            setAccomodation={setAccomodation}
            isCalendarOpen={isCalendarOpen}
            setIsCalendarOpen={setIsCalendarOpen}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <form name="Buchungsanfrage" action="/de/" method="POST" netlify="true">
          <input
            type="hidden"
            name="form-name"
            defaultValue="Buchungsanfrage"
          />
          <input type="text" name="Unterkunft" defaultValue={accomodation} value={accomodation} className="hidden" />
          <input type="number" name="Personen" defaultValue={persons} value={persons} className="hidden" />
          <input
            type="date"
            value={date[0]?.toISOString().slice(0, 10)}
            name="Anreisedatum"
            defaultValue={date[0]?.toISOString().slice(0, 10)}
            className="hidden"
          />
          <input
            type="date"
            value={date[1]?.toISOString().slice(0, 10)}
            name="Abreisedatum"
            defaultValue={date[1]?.toISOString().slice(0, 10)}
            className="hidden"
          />
          <button
            type="submit"
            className="flex items-center space-x-2 rounded-xl bg-green p-2 text-white"
          >
            <span>{t("request")}</span>
            <RightArrowSmIcon />
          </button>
        </form>
      </div>
    </div>
  );
}
