import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import FacebookIcon from "../data/icons/FacebookIcon";
import TwitterIcon from "../data/icons/TwitterIcon";
import InstagramIcon from "../data/icons/InstagramIcon";
import ReactPannellum, { isLoaded } from "react-pannellum";
import a from "../data/images/contact/a.jpg";
import b from "../data/images/contact/b.jpg";

const contacts = [
  {
    data: "Biohof.Liebhart@aon.at",
    href: "mailto:biohof.liebhart@aon.at",
  },
  {
    data: "+43 680/2167952",
    href: "tel:+436802167952",
  },
  {
    data: "Merkenbrechts 22, 3800 Göpfritz",
    href: "https://goo.gl/maps/TE9aXP4352q6S7yY8",
  },
];

const socialMedien = [
  {
    name: "Facebook",
    icon: (
      <FacebookIcon
        className={"h-6 w-6 fill-black stroke-black dark:fill-white"}
      />
    ),
    href: "https://m.facebook.com/BiobauernhofLiebhart/?locale2=de_DE",
  },
  {
    name: "Twitter",
    icon: (
      <TwitterIcon
        className={"h-6 w-6 fill-black stroke-black dark:fill-white"}
      />
    ),
    href: "https://www.instagram.com/hofstadl_liebhart/",
  },
  {
    name: "Instagram",
    icon: (
      <InstagramIcon
        className={"h-6 w-6 fill-black stroke-black dark:fill-white"}
      />
    ),
    href: "https://www.instagram.com/hofstadl_liebhart/",
  },
];

const translations = {
  contact: "contact",
  followUs: "followUs",
};

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

export default function Contact() {
  const { t } = useTranslation();

  const loadHotspots = () => {
    scenes.map((scene, index) =>
      ReactPannellum.addScene(`${index + 1}`, scene)
    );
  };

  return (
    <Layout>
      <section>
        <div className="flex justify-center">
          <ReactPannellum
            id={"360Tour"}
            sceneId={"0"}
            imageSource={a}
            config={{
              author: "Author",
              title: "Title",
              description: "Deescription",
              autoRotate: -1,
              autoLoad: true,
              autoRotateInactivityDelay: 600,
              doubleClickZoom: true,
              preview: a,
              hotSpots: [
                {
                  pitch: 20,
                  yaw: 5,
                  type: "scene",
                  text: "Baltimore Museum of Art",
                  sceneId: "1",
                },
              ],
            }}
            onPanoramaLoaded={loadHotspots}
            className={"h-[80vh]"}
          />
        </div>
      </section>

      <section class="body-font relative text-gray-600">
        <div class="container flex w-full flex-wrap justify-center px-5 py-24 sm:flex-nowrap">
          <div class="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 sm:mr-10 md:w-1/2 lg:w-2/3">
            <iframe
              width="800"
              height="500"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.9061267617135!2d15.398633215875835!3d48.707275179272976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4772c0e2c020a7c9%3A0xfd9009b92c854be2!2sLiebhart%20Sonja!5e0!3m2!1sde!2sat!4v1648485753466!5m2!1sde!2sat"
            ></iframe>
          </div>
          <div class="mt-8 flex w-full flex-col items-center justify-center bg-white md:ml-auto md:mt-0 md:w-1/2 md:items-start md:py-8 lg:w-1/3">
            <div className="flex w-full flex-col items-center text-center">
              <h2 class="title-font mb-1 text-lg font-medium text-gray-900">
                {t(translations.contact)}
              </h2>
              <p class="mb-2 leading-relaxed text-gray-600">Sonja Liebhart</p>
              {contacts.map((value, index) => (
                <a
                  key={index}
                  href={value.href}
                  rel="noreferrer"
                  target="_blank"
                  className="mb-2 block text-gray-600 hover:text-black dark:text-white"
                >
                  {value.data}
                </a>
              ))}
              <div className="mb-10"></div>
              <h2 class="title-font mb-1 text-lg font-medium text-gray-900">
                {t(translations.followUs)}
              </h2>
              {socialMedien.map((value, index) => (
                <a
                  key={index}
                  href={value.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mb-2 flex items-center justify-center space-x-3 text-gray-600 hover:text-black dark:text-white md:justify-start"
                >
                  <div>{value.icon}</div>
                  <div>{value.name}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
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
