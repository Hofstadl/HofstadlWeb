import React from "react";
import Layout from "../components/Layout";
import {graphql} from "gatsby";
import Masonry from '@mui/lab/Masonry';
import Activity from "../components/Activity"
import activities from "../data/activities.json"

export default function Activities() {

    return (
        <Layout>
            <div className="mx-2">
                <Masonry columns={{ xs: 2, sm: 3 }} spacing={2}>
                    {activities.map((activity, index) => (
                        (activity.name !== "Waldviertel-Radweg") &&
                        <Activity key={index} image={activity.photo} headline={activity.name} text={activity.description} />
                        ))}
                </Masonry>
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
