import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { useEffect, useState } from "react";
import LeftArrowIcon from "../../data/icons/LeftArrowIcon";
import RightArrowIcon from "../../data/icons/RightArrowIcon";

export default function PersonsSelecter({ persons, setPersons, accomodation }) {
  const { t } = useTranslation();
  const [maxPersons, setMaxPersons] = useState(2);

  useEffect(() => {
    console.log(accomodation);
    if (accomodation === "room") {
      setMaxPersons(2);
    } else {
      setMaxPersons(4);
    }
    //setMaxPersons(accomodation === "room" ? 2 : 4);
    console.log(maxPersons);
    if (persons > maxPersons) {
      setPersons(maxPersons);
    }
  }, [accomodation]);

  const handleClick = (leftArrow) => {
    if (leftArrow) {
      if (persons > 1) {
        setPersons((prevPersons) => --prevPersons);
      }
    } else {
      setMaxPersons(accomodation === "room" ? 2 : 4);
      console.log(maxPersons);
      if (persons < maxPersons) {
        setPersons((prevPersons) => ++prevPersons);
      }
    }
  };

  return (
    <div className="flex flex-1 items-center">
      <div className="h-full w-full min-w-[100px] rounded-2xl p-3 shadow-inner shadow-neutral-200">
        <p className="text-center font-sans text-xs text-gray-400">
          {t("persons")}
        </p>
        <div className="flex min-h-[28px] items-center justify-between">
          <button onClick={() => handleClick(true)}>
            <LeftArrowIcon
              className={`${
                persons === 1 ? "fill-gray-400" : "fill-black"
              } h-6 w-6`}
            />
          </button>
          <p className="text-md px-2">{persons}</p>
          <button onClick={() => handleClick(false)}>
            <RightArrowIcon
              className={`${
                persons === maxPersons ? "fill-gray-400" : "fill-black"
              } h-6 w-6`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
