import { Burger, Drawer } from "@mantine/core";
import { navigate } from "gatsby";
import {
  I18nextContext,
  Link,
  useTranslation,
} from "gatsby-plugin-react-i18next";
import React, { useContext, useRef, useState } from "react";
import ActivitiesIcon from "../../data/icons/ActivitiesIcon";
import ContactIcon from "../../data/icons/ContactIcon";
import HomeIcon from "../../data/icons/HomeIcon";
import RoomApartmentIcon from "../../data/icons/RoomsApartmentsIcon";
import logo from "../../data/images/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileLanguageSwitcher from "./MobileLanguageSwitcher";

const navs = [
  {
    name: "start",
    route: "/",
    icon: (
      <HomeIcon
        className={
          "h-8 w-8 fill-transparent stroke-black stroke-2 dark:stroke-white"
        }
      />
    ),
  },
  {
    name: "rooms-apartments",
    route: "/rooms-apartments/",
    icon: <RoomApartmentIcon className={"h-8 w-8 "} />,
  },
  {
    name: "activities",
    route: "/activities/",
    icon: <ActivitiesIcon className={"h-8 w-8  dark:fill-white"} />,
  },
  {
    name: "contact",
    route: "/contact/",
    icon: (
      <ContactIcon
        className={
          "h-8 w-8 fill-transparent stroke-black stroke-2 dark:fill-white"
        }
      />
    ),
  },
];

export default function Navbar() {
  let [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const context = useContext(I18nextContext);

  return (
    <nav className="fixed z-50 w-full bg-white dark:bg-neutral-900 dark:text-white">
      <div className={"mx-auto px-8 md:max-w-7xl"}>
        {/* Desktop navigation starts here */}
        <div
          className={
            "hidden h-24 items-center justify-center space-x-6 md:flex"
          }
        >
          <img
            src={logo}
            onClick={() => navigate("/")}
            className={"h-16 w-auto pr-8 pt-2"}
            alt={"logo"}
          />
          {navs.map((nav) => (
            <Link
              to={nav.route}
              key={nav.route}
              className={`${
                nav.route === context.originalPath ? "text-green" : null
              } hover:text-gray-700`}
            >
              {t(nav.name)}
            </Link>
          ))}
          <div className="pl-8">
            <LanguageSwitcher />
          </div>
        </div>
        {/* Mobile navigation starts here */}
        <div className={"flex h-20 items-center justify-between md:hidden"}>
          <img
            src={logo}
            onClick={() => navigate("/")}
            className={"mr-10 mt-2 h-16 w-auto"}
            alt={"logo"}
          />

          <Burger opened={menuOpen} onClick={() => setMenuOpen((o) => !o)} />
        </div>
        {/* Mobile navigation menu starts here */}
        <Drawer
          opened={menuOpen}
          onClose={() => setMenuOpen(false)}
          padding="xl"
          position="top"
          withCloseButton={false}
          size="100%"
          classNames={{ drawer: "top-20 md:top-24" }}
          withOverlay={false}
          zIndex="40"
          className="md:hidden"
        >
          <div
            data-autofocus
            className={
              "mx-auto flex h-full flex-col justify-between overflow-scroll border-t-2 py-6 px-8"
            }
          >
            <div>
              {navs.map((nav, index) => (
                <Link
                  className={`${
                    nav.route === context.originalPath ? "text-green" : null
                  } block py-4 hover:text-gray-700`}
                  to={nav.route}
                  key={nav.route}
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="flex items-center justify-start">
                    <div className="pr-3">{nav.icon}</div>
                    {t(nav.name)}
                  </div>
                </Link>
              ))}
            </div>
            <MobileLanguageSwitcher />
          </div>
        </Drawer>
      </div>
    </nav>
  );
}
