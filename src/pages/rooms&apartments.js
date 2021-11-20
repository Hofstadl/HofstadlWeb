import React from "react"
import Layout from "../components/Layout"
import {graphql} from "gatsby";
import {useTranslation} from "gatsby-plugin-react-i18next";

export default function RoomsApartments() {
    const {t} = useTranslation();

    return (
    <Layout>
      <div>{t("rooms&apartments")}</div>
    </Layout>
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