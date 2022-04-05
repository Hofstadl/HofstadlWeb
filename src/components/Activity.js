import React from "react";
import {useTranslation} from "gatsby-plugin-react-i18next";
import {graphql} from "gatsby";
import {BackgroundImage, Center, Text, Box} from '@mantine/core';

export default function Activity({image, headline, text}) {
    const {t} = useTranslation();

    return (
        <div>
            <div>
                <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover">
                    <img src={image}
                         className="w-full transition duration-300 ease-linear align-middle"/>
                        <div className="opacity-100 hover:opacity-100 absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                            <div className="flex justify-center h-full">
                                <h5 className="text-lg font-bold text-white m-6">{headline}</h5>
                            </div>
                        </div>
                        <div className="hover-overlay">
                            <div
                                className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                               ></div>
                        </div>
                </div>
            </div>
        </div>
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
