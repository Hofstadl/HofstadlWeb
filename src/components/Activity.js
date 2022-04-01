import React from "react";
import {useTranslation} from "gatsby-plugin-react-i18next";
import {graphql} from "gatsby";

export default function Activity({image, headline, text}) {
    const {t} = useTranslation();

    return (
        <div>
            <div className="bg-red-100 relative">
                <img className="bg-cover bg-center" src={image} alt={t(headline)}></img>
                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-white">
                    <div className="flex justify-center">{t(headline)}</div><br/>
                    <div className="flex justify-center">{t(text)}</div>
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
