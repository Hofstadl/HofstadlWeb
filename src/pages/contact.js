import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import FacebookIcon from "../data/icons/FacebookIcon";
import TwitterIcon from "../data/icons/TwitterIcon";
import InstagramIcon from "../data/icons/InstagramIcon";

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
        className={"fill-full h-6 w-6 stroke-black dark:fill-white"}
      />
    ),
    href: "https://m.facebook.com/BiobauernhofLiebhart/?locale2=de_DE",
  },
  {
    name: "Twitter",
    icon: (
      <TwitterIcon
        className={"fill-full h-6 w-6 stroke-black dark:fill-white"}
      />
    ),
    href: "https://www.instagram.com/hofstadl_liebhart/",
  },
  {
    name: "Instagram",
    icon: (
      <InstagramIcon
        className={"fill-full h-6 w-6 stroke-black dark:fill-white"}
      />
    ),
    href: "https://www.instagram.com/hofstadl_liebhart/",
  },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Layout>
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
            <div className="flex w-full flex-col items-center">
              <h2 class="title-font mb-1 text-lg font-medium text-gray-900">
                Kontakt
              </h2>
              <p class="mb-2 leading-relaxed text-gray-600">Sonja Liebhart</p>
              {contacts.map((info) => (
                <p className="mb-2">{info.data}</p>
              ))}
              <div className="mb-10"></div>
              <h2 class="title-font mb-1 text-lg font-medium text-gray-900">
                Folge uns
              </h2>

              {socialMedien.map((socialMedia) => (
                <p className="mb-4 flex flex-row">
                  {socialMedia.icon} {socialMedia.name}
                </p>
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
