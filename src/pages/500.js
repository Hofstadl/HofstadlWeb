import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";
import ErrorPage from "../components/ErrorPage";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <ErrorPage
        errorCode={500}
        error={t("serverError")}
        errorDetails={t("serverErrorText")}
      />
    </>
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
