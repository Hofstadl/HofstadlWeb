import React from "react"
import Layout from "../components/Layout"
import ErrorPage from "../components/ErrorPage"

import { graphql } from 'gatsby'
import {useTranslation} from "gatsby-plugin-react-i18next";

export default function NotFound() {
    const {t} = useTranslation();

    return (
        <>
            <ErrorPage errorCode={404} error={t("nothingFound")} errorDetails={t("nothingFoundText")}/>
        </>
    )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
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