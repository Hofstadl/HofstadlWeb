import { Dialog, Transition } from "@headlessui/react";
import { navigate } from "gatsby";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import React, { Fragment, useRef, useState } from "react";
import ActivitiesIcon from "../../data/icons/ActivitiesIcon";
import CloseIcon from "../../data/icons/CloseIcon";
import ContactIcon from "../../data/icons/ContactIcon";
import HomeIcon from "../../data/icons/HomeIcon";
import MenuIcon from "../../data/icons/MenuIcon";
import TwitterIcon from "../../data/icons/TwitterIcon";
import logo from "../../data/images/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";

const navs = [
  {
    name: "start",
    route: "/",
    icon: (
      <HomeIcon
        className={"h-8 w-8 fill-transparent stroke-black dark:stroke-white"}
      />
    ),
  },
  {
    name: "rooms-apartments",
    route: "/rooms-apartments/",
    icon: <TwitterIcon className={"h-8 w-8 fill-black dark:fill-white"} />,
  },
  {
    name: "activities",
    route: "/activities/",
    icon: <ActivitiesIcon className={"h-8 w-8 fill-black dark:fill-white"} />,
  },
  {
    name: "contact",
    route: "/contact/",
    icon: (
      <ContactIcon
        className={"h-8 w-8 fill-transparent stroke-black dark:fill-white"}
      />
    ),
  },
];

export default function Navbar() {
  let [menuOpen, setMenuOpen] = useState(false);
  let initialRef = useRef(null);
  const { t } = useTranslation();

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
            <Link to={nav.route} key={nav.route} className="hover:text-green">
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

          <button onClick={() => setMenuOpen(true)}>
            <MenuIcon className={"h-8 w-8 dark:fill-white"} />
          </button>
        </div>
        {/* Mobile navigation menu starts here */}
        <Transition
          show={menuOpen}
          as={Fragment}
          enter={`ease-in-out duration-300`}
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog
            as="div"
            initialFocus={initialRef}
            ref={initialRef}
            onClose={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 h-full w-full overflow-auto bg-white dark:bg-neutral-900 dark:text-white md:hidden"
          >
            <div className={"mx-auto px-8 md:max-w-7xl"}>
              <div className={"flex h-20 items-center justify-between"}>
                <img
                  src={logo}
                  onClick={() => navigate("/")}
                  className={"mr-10 mt-2 h-16 w-auto"}
                  alt={"logo"}
                />

                <LanguageSwitcher />
              </div>
            </div>
            <div className="-mb-4 block border-b-2 pt-4" />

            <div className={"mx-auto space-y-40 py-8 px-8 sm:space-y-60"}>
              <div>
                {navs.map((nav, index) => (
                  <Transition.Child
                    key={index}
                    as={Fragment}
                    enter={`ease-in-out duration-300`}
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Link
                      className={"block space-x-2 py-4"}
                      to={nav.route}
                      key={nav.route}
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="flex items-center justify-start">
                        <div className="pr-2">{nav.icon}</div>
                        {t(nav.name)}
                      </div>
                    </Link>
                  </Transition.Child>
                ))}
              </div>
              <div className="flex justify-center ">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex h-14 w-14 items-center justify-center rounded-full shadow-inner"
                >
                  <CloseIcon className={"h-8 w-8 stroke-green"} />
                </button>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </nav>
  );
}
