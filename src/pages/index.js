import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";
import Layout from "../components/Layout";

export default function Start() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div>{t("start")}
      Hallo
      </div>
    </Layout>
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
