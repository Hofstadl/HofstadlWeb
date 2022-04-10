import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";

export default function Imprint() {
  const { t } = useTranslation();

  return (
    <div className="ml-20 mr-20 mt-6">
      <h1 className="title-font text-3xl font-medium text-black dark:text-white sm:text-4xl">
        Impressum
      </h1>
      <br />
      <h6 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Angaben gemäß § 5 TMG:
      </h6>
      <p>
        Sonja Liebhart, Einzelunternehmen
        <br />
        Landwirt
        <br />
        Sonja Liebhart
      </p>
      <br />
      <h3 className=" text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Postanschrift:
      </h3>
      <p>
        Merkenbrechts 22
        <br />
        3800 Göpfritz
        <br />
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Kontakt:
      </h3>
      <p>
        Telefon: +436802167952
        <br />
        E-Mail: Biohof.liebhart@aon.at
      </p>
      <p></p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Vertreten durch:
      </h3>
      <p>
        Sonja Liebhart, Geschäftsführer
        <br />
      </p>
      <p></p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Umsatzsteuer-Identifikationsnummer:
      </h3>
      <p>ATU 43 98 05 09</p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        EU-Streitschlichtung:
      </h3>
      <p>
        Gemäß Verordnung über Online-Streitbeilegung in
        Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die
        Online-Streitbeilegungsplattform (OS-Plattform) informieren. Verbraucher
        haben die Möglichkeit, Beschwerden an die Online
        Streitbeilegungsplattform der Europäischen Kommission unter{" "}
        <a
          href="http://ec.europa.eu/odr?tid=121371976"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-lightblue"
        >
          http://ec.europa.eu/odr?tid=121371976
        </a>{" "}
        zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in
        unserem Impressum.
      </p>
      <div className="mb-4"></div>
      <p>
        Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder
        verpflichtet sind, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Haftung für Inhalte dieser Webseite:
      </h3>
      <p>
        Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen
        uns korrekte und aktuelle Informationen bereitzustellen. Leider können
        wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite
        übernehmen, speziell für jene die seitens Dritter bereitgestellt wurden.
      </p>
      <div className="mb-4"></div>
      <p>
        Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen,
        bitten wir Sie uns umgehend zu kontaktieren, Sie finden die Kontaktdaten
        im Impressum.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Haftung für Links auf dieser Webseite:
      </h3>
      <p>
        Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir
        nicht verantwortlich sind. Haftung für verlinkte Websites besteht laut §
        17 ECG für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten
        hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht
        aufgefallen sind und wir Links sofort entfernen würden, wenn uns
        Rechtswidrigkeiten bekannt werden.
      </p>
      <div className="mb-4"></div>
      <p>
        Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitten wir
        Sie uns zu kontaktieren, Sie finden die Kontaktdaten im Impressum.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Urheberrechtshinweis:
      </h3>
      <p>
        Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen
        dem Urheberrecht. Falls notwendig, werden wir die unerlaubte Nutzung von
        Teilen der Inhalte unserer Seite rechtlich verfolgen.
      </p>
      <div className="mb-4"></div>
      <p>
        Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht
        verletzen, bitten wir Sie uns zu kontaktieren.
      </p>
      <br />
      <h3 className="text-blue-600 mt-0 mb-2 text-base font-bold leading-tight">
        Bildernachweis:
      </h3>
      <p>
        Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich
        geschützt.
      </p>
      <div className="mb-10"></div>
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
