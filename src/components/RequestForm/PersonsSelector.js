import React, { useState } from "react";
import RightArrowIcon from "../../data/icons/RightArrowIcon";
import LeftArrowIcon from "../../data/icons/LeftArrowIcon";
import { useStaticQuery, graphql } from "gatsby";

export default function PersonsSelecter() {

  const [persons, setPersons] = useState(2);

  const handleClick = (leftArrow) => {
    if (leftArrow) {
      if (persons > 1) {
        setPersons((prevPersons) => --prevPersons);
      }
    } else {
      setPersons((prevPersons) => ++prevPersons);
    }
  };

  return (
    <div className="flex">
      <div className="w-28 rounded-2xl p-3 shadow-inner shadow-neutral-200">
        <p className="text-xs text-gray-400">Personen</p>
        <div className="flex items-center justify-between">
          <button onClick={() => handleClick(true)}>
            <LeftArrowIcon className={`${persons === 1 ? "fill-gray-400" : "fill-black"} h-6 w-6`} />
          </button>
          <p className="px-2 text-lg">{persons}</p>
          <button onClick={() => handleClick(false)}>
            <RightArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
