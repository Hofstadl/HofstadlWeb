import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import Layout from "../components/Layout";

export default function Start() {
  const { t } = useTranslation();
  const [room, setRoom] = useState(false);

  return <div>Content</div>;
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
