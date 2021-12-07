import React from "react"
import Layout from "../components/Layout"

import { graphql } from 'gatsby'
import {useTranslation} from "gatsby-plugin-react-i18next";

export default function NotFound() {
    const {t} = useTranslation();

    return (
        <Layout>
            <div class="flex h-screen flex-col">
                <div class="m-auto">
                    <div class="align-bottom text-center text-9xl text-yellow-500">
                    404
                    </div>
                <div class="align-middle text-center text-4xl">
                    {t("nothingFound")}
                </div>
                <div class="align-middle text-center text-1xl">
                    {t("nothingFoundText")}
                </div>
                </div>
            </div>
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