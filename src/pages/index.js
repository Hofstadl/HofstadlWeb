import React from "react"
import Layout from "../components/Layout"
import {graphql} from "gatsby"

export default function Home() {
    return (
        <Layout>
            <div>Start</div>
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