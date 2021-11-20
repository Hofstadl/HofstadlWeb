import React, {cloneElement, useContext} from "react"
import {graphql} from "gatsby"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Hidden from "@mui/material/Hidden"
import {useScrollTrigger} from "@mui/material"
import {I18nextContext, Link, useTranslation} from 'gatsby-plugin-react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";
import {makeStyles} from "@mui/styles";

function ElevationScroll({children}) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200
    })

    return cloneElement(children, {
        className: trigger ? "bg-primary" : "transparent"
    })
}


const tabs = [
    {
        name: "start",
        route: "/"
    },
    {
        name: "rooms&apartments",
        route: "/rooms&apartments/",
    },
    {
        name: "contact",
        route: "/contact/",
    },
    {
        name: "activities",
        route: "/activities/",
    }
]

const useStyles = makeStyles((theme) => {
    return {
        toolbarSpacing: theme.mixins.toolbar
    }
})

export default function Navbar() {
    const classes = useStyles()
    const {t} = useTranslation()
    const context = useContext(I18nextContext)

    return (
        <>
            <ElevationScroll>
                <AppBar
                    color={"transparent"}
                    elevation={0}
                >
                    <Toolbar className={"w-screen flex justify-around"}>

                        {/* Desktop view */}
                        <Hidden mdDown>
                            {tabs.map(tab => (
                                <Link to={tab.route} key={tab.route}>{t(tab.name)}</Link>
                            ))}
                        </Hidden>
                        {/* Mobile view */}
                        <Hidden mdUp>
                            Hi
                        </Hidden>
                        <LanguageSwitcher/>
                    </Toolbar>

                </AppBar>
            </ElevationScroll>
            <div className={context.originalPath === '/' ? null : classes.toolbarSpacing}/>
        </>
    )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
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