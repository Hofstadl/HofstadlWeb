/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const { languages } = require("./src/data/locales/languages");

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-mantine`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hofstadl`,
        short_name: `Hofstadl`,
        description: `Your holiday in the Waldviertel`,
        lang: `en`,
        display: `standalone`,
        icon: `src/data/images/favicon.svg`,
        start_url: `/`,
        theme_color_in_head: false,
        localize: [
          {
            start_url: `/de/`,
            lang: `de`,
            description: `Ihr Urlaub im Waldviertel`,
          },
          {
            start_url: `/cz/`,
            lang: `cz`,
            description: `Vaše dovolená ve Waldviertel`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: "locale",
        languages,
        generateDefaultLanguagePage: true,
        siteUrl: "https://localhost:8000/",
        i18nextOptions: {
          defaultNS: "common",
          //debug: true,
          lowerCaseLng: true,
          saveMissing: false,
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    {
      resolve: `gatsby-source-google-calendar`,
      options: {
        calendarIds: [
          "9gdggpsks7niic72l1ppo76fcg@group.calendar.google.com",
          "m5q8o1slr45l6s03kdoenha7h8@group.calendar.google.com",
        ],
        maxResults: 2500,
      },
    },
  ],
};
