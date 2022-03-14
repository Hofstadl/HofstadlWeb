import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import b from "../data/images/rooms-apartments/b.jpg";
import a from "../data/images/rooms-apartments/a.jpg";

export default function RoomsApartments() {
  const { t } = useTranslation();
  
  return (
    <div>
      {t("rooms&apartments")}
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
