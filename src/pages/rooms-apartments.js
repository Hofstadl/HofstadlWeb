import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Pannellum } from "pannellum-react";
import b from "../data/images/rooms-apartments/b.jpg";
import a from "../data/images/rooms-apartments/a.jpg";
import { Viewer } from "photo-sphere-viewer";


const scenes = [
  {
    imageSource: b,
    author: "Author",
    title: "Title",
    description: "Deescription",
    autoRotate: -1,
    autoLoad: true,
    autoRotateInactivityDelay: 600,
    preview: b,
    hotSpots: [
      {
        pitch: 14.1,
        yaw: 1.5,
        type: "scene",
        text: "Baltimore Museum of Art",
        sceneId: "0",
      },
    ],
  },
];

export default function RoomsApartments() {
  const { t } = useTranslation();
  const sphereElementRef = React.createRef();

  useEffect(() => {
    const viewer = new Viewer({
      container: sphereElementRef.current,
      panorama:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Colonia_Ulpia_Traiana_-_Rekonstruktion_r%C3%B6mischer_Schiffe-0010560.jpg",
    });

    // unmount component instructions
    return () => {
      viewer.destroy();
    };
  }, []); // will only be called when the src prop gets updated

  return (
    <div>
      {t("rooms&apartments")}

      <div ref={sphereElementRef} />;
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
