import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";
import FacebookIcon from "../data/icons/FacebookIcon";
import InstagramIcon from "../data/icons/InstagramIcon";
import TwitterIcon from "../data/icons/TwitterIcon";
import logo from "../data/images/logo.png";

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

const navs = [
  {
    name: "start",
    route: "/",
  },
  {
    name: "rooms-apartments",
    route: "/rooms-apartments",
  },
  {
    name: "activities",
    route: "/activities",
  },
  {
    name: "contact",
    route: "/contact",
  },
  {
    name: "imprint",
    route: "/imprint",
  },
  {
    name: "privacy",
    route: "/privacy",
  },
];

const navImprint = [
  {
    name: "imprint",
    route: "/imprint",
  },
];

const navPrivacy = [
  {
    name: "privacy",
    route: "/privacy",
  },
];

const translations = {
  contact: "contact",
  navigation: "navigation",
  followUs: "followUs",
  imprint: "imprint",
  privacy: "privacy",
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="body-font bg-gray-100 text-gray-600 dark:bg-neutral-900">
      <div className="mx-auto flex flex-col items-center justify-evenly px-5 py-10 text-center md:flex-row md:items-center lg:items-start">
        {/* Container starts here */}
        <div className="md:flex md:text-left">
          {/* Logo starts here */}
          <img src={logo} alt="logo" className="mr-10 hidden h-36 lg:block" />
          {/* Contact block starts here */}
          <div className="mx-auto block w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-base font-bold tracking-widest text-gray-900 dark:text-white">
              {t(translations.contact)}
            </h2>
            <nav className="mb-10">
              <p className="block text-gray-600 dark:text-white">
                Sonja Liebhart
              </p>
              {contacts.map((value, index) => (
                <a
                  key={index}
                  href={value.href}
                  rel="noreferrer"
                  target="_blank"
                  className="block text-gray-600 hover:text-black dark:text-white"
                >
                  {value.data}
                </a>
              ))}
            </nav>
          </div>
          {/* Navigation block starts here */}
          <div className="mx-auto block w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-base font-bold tracking-widest text-gray-900 dark:text-white">
              {t(translations.navigation)}
            </h2>
            <nav className="mb-10 list-none">
              {navs.map((nav, index) => (
                <Link
                  key={index}
                  className="block text-gray-600 hover:text-black dark:text-white"
                  to={nav.route}
                >
                  {t(nav.name)}
                </Link>
              ))}
            </nav>
          </div>
          {/* Follow us block starts here */}
          <div className="mx-auto block w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-base font-bold tracking-widest text-gray-900 dark:text-white">
              {t(translations.followUs)}
            </h2>
            <nav className="mb-10 list-none space-y-3">
              {socialMedien.map((value, index) => (
                <a
                  key={index}
                  href={value.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-3 text-gray-600 hover:text-black dark:text-white md:justify-start"
                >
                  <div>{value.icon}</div>
                  <div>{value.name}</div>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-neutral-900">
        <div className="container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row">
          <p className="text-center text-sm text-gray-500 dark:text-white sm:text-left">
            Copyright © {new Date().getFullYear()} Hofstadl
          </p>
          <span className="mt-2 inline-flex justify-center space-x-16 sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-gray-500 dark:text-white">
              {navImprint.map((nav, index) => (
                <Link
                  key={index}
                  className="block text-gray-600 hover:text-black dark:text-white"
                  to={nav.route}
                >
                  {t(translations.imprint)}
                </Link>
              ))}
            </a>
            <a className="text-gray-500 dark:text-white">
              {navPrivacy.map((nav, index) => (
                <Link
                  key={index}
                  className="block text-gray-600 hover:text-black dark:text-white"
                  to={nav.route}
                >
                  {t(translations.privacy)}
                </Link>
              ))}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
