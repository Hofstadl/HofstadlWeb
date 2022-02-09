import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import Layout from "../components/Layout";

export default function Start() {
  const { t } = useTranslation();
  const [room, setRoom] = useState(false);

  return (
    <>
      {/* Hero section starts here */}
      <div className="flex h-screen w-full">
        {/* Left column starts here */}
        <div className="flex h-full flex-1 flex-col px-4">
          <div className="font-bold">
            <div className="text-xl font-bold">Willkommen im Hofstadl,</div>
            <div>
              Urlaub im <span className="text-green">Waldviertel</span>
            </div>
          </div>
          <div className="text-sm">
            Unsere Ferienwohnungen und Zimmer bieten den perfekten Erholungsort
            für Groß und Klein.
          </div>
          <Switch
            as="div"
            checked={room}
            onChange={setRoom}
            className={`flex justify-between rounded-full bg-white shadow-inner`}
          >
            <div className={`${room ? "bg-cyan-600" : ""}`}>Zimmer</div>
            <div>Ferienwohnung</div>
            <span className="sr-only">Select room or apartment</span>
            <div
              className={`flex bg-cyan-600 ${
                room ? "justify-start" : "justify-end"
              }`}
            >
              Test
            </div>
          </Switch>
        </div>
        {/* Right column starts here */}
        <div className="h-full w-10 flex-[1.25] bg-orange-300">2</div>
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
