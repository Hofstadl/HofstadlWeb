import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";
import LeftArrowIcon from "../../data/icons/LeftArrowIcon";
import RightArrowIcon from "../../data/icons/RightArrowIcon";

export default function PersonsSelecter() {
  const { t } = useTranslation();
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
        <p className="text-xs text-gray-400">{t("persons")}</p>
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

export const query = graphql`
  query ($language: String!) {
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