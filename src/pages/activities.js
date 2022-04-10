import { Accordion, Card, Image } from "@mantine/core";
import Masonry from "@mui/lab/Masonry";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";
import activities from "../data/activities.json";

export default function Activities() {
  const { t } = useTranslation();

  return (
    <>
      <div className="mx-auto mt-4 px-4">
        <Masonry columns={{ xs: 2, sm: 3 }} spacing={2}>
          {activities.map(
            (activity, index) =>
              activity.name !== "Waldviertel-Radweg" && (
                <Card shadow="sm" p="lg" radius="md">
                  <Card.Section>
                    <Image src={activity.photo} alt="Norway" />
                    <Accordion iconPosition="right">
                      <Accordion.Item label={activity.name}>
                        {t(activity.description)}
                      </Accordion.Item>
                    </Accordion>
                  </Card.Section>
                </Card>
              )
          )}
        </Masonry>
      </div>
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
