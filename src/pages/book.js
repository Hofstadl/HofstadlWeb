import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Entity, Scene } from "aframe-react";
import a from "../data/images/rooms-apartments/a.jpg";

export default function Book() {
  const { t } = useTranslation();

  return (
    <>
      <div className="h-screen">
        <Scene>
          <a-assets>
            <img id="groundTexture" src={a} />
          </a-assets>
          <Entity primitive="a-sky" rotation="0 -130 0" src="#groundTexture" />
          <Entity
            primitive="a-plane"
            src="#groundTexture"
            rotation="-90 0 0"
            height="100"
            width="100"
          />
          <Entity primitive="a-light" type="ambient" color="#445451" />
          <Entity
            primitive="a-light"
            type="point"
            intensity="2"
            position="2 4 4"
          />
          <Entity
            primitive="a-sky"
            height="2048"
            radius="30"
            src="#skyTexture"
            theta-length="90"
            width="2048"
          />
          <Entity
            text={{ value: "Hello, A-Frame React!", align: "center" }}
            position={{ x: 0, y: 2, z: -1 }}
          />
        </Scene>
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
