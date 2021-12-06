import React from "react"
import Layout from "../components/Layout"
import Typography from '@mui/material/Typography';

import { graphql } from 'gatsby'
import {useTranslation} from "gatsby-plugin-react-i18next";

export default function NotFound() {
    const {t} = useTranslation();

    return (
        <Layout>
            <div>
                <Typography style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'}} fontWeight={350} color={'orange'} variant="h1" component="div" gutterBottom>
                    404
                </Typography>
                <Typography style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'}} variant="h4" gutterBottom component="div">
                    {t("nothingFound")}
                </Typography>
                <Typography style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'}} variant="body2" gutterBottom component="div">
                    {t("nothingFoundText")}
                </Typography>
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