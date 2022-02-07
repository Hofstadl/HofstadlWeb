import React, { useState } from "react";
import { graphql } from "gatsby";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import ContactIcon from "../data/icons/ContactIcon";
import TwitterIcon from "../data/icons/TwitterIcon";
import ActivitiesIcon from "../data/icons/ActivitiesIcon";
import HomeIcon from "../data/icons/HomeIcon";
import MenuIcon from "../data/icons/MenuIcon";
import RoomsApartmentsIcon from "../data/icons/RoomsApartmentsIcon";
import logo from "../data/images/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { Dialog } from "@headlessui/react";

const navs = [
  {
    name: "start",
    route: "/",
    icon: <HomeIcon className={"h-8 w-8"} fill={"none"} stroke={"#111"} />,
  },
  {
    name: "rooms&apartments",
    route: "/rooms-apartments/",
    icon: <TwitterIcon className={"h-8 w-8"} fill={"#111"} stroke={"#111"} />,
  },
  {
    name: "activities",
    route: "/activities/",
    icon: (
      <ActivitiesIcon className={"h-8 w-8"} fill={"none"} stroke={"#111"} />
    ),
  },
  {
    name: "contact",
    route: "/contact/",
    icon: <ContactIcon className={"h-8 w-8"} fill={"none"} stroke={"#111"} />,
  },
];

export default function Navbar() {
  let [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav>
      <div className={"mx-auto border border-red-500 px-8 md:max-w-7xl"}>
        <div className={"hidden items-center justify-center space-x-6 md:flex"}>
          <img src={logo} className={"mr-10 h-16 w-auto"} alt={"logo"} />
          {navs.map((nav) => (
            <Link to={nav.route} key={nav.route}>
              {t(nav.name)}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>
        <div className={"flex items-center justify-between md:hidden"}>
          <img src={logo} className={"mr-10 h-16 w-auto"} alt={"logo"} />
          <button onClick={() => setMenuOpen(true)}>
            <MenuIcon className={"h-8 w-8"} fill={"#111"} stroke={"#111"} />
          </button>
        </div>
        <Dialog
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          className="md:hidden fixed top-24 h-full w-full overflow-y-auto bg-red-500"
        >
          <div className={""}>
            {navs.map((nav) => (
              <Link
                className={"block"}
                to={nav.route}
                key={nav.route}
                onClick={() => setMenuOpen(false)}
              >
                {t(nav.name)}
              </Link>
            ))}
          </div>
        </Dialog>
      </div>
    </nav>
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

/*
<nav className={"fixed w-screen"}>
      <div className={"flex items-center justify-center"}>
        <div class="max-w-7xl min-w-sm bg-red-100">
          <div
            className={
              "hidden h-24 items-center justify-center space-x-8 border px-8 md:flex"
            }
          >
            <img src={logo} className={"h-16 w-auto"} alt={"logo"} />
            {navs.map((nav) => (
              <Link to={nav.route} key={nav.route}>
                {t(nav.name)}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>
          <div className={"md:hidden h-24 flex items-center justify-between"}>
            <img src={logo} className={"h-16 w-auto"} alt={"logo"} />
            <MenuIcon className={"h-8 w-8"} fill={"#111"} stroke={"#111"} />
          </div>
        </div>
      </div>
    </nav>
    */
