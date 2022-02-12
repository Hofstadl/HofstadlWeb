/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const { languages } = require("./src/data/locales/languages");

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
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
          'auct8d446vh0clqocmd5q2hpgs@group.calendar.google.com',
          'h3493ko5vq73d3rdal2m7r1or4@group.calendar.google.com',
        ],
        maxResults: 2500,
      }
    },
  ],
};
