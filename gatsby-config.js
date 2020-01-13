/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156198766-1",
        head: true,
        pageTransitionDelay: 0,
        siteSpeedSampleRate: 10,
        cookieDomain: "adolforangel.com",
      },
    }
  ],
  pathPrefix: "/",
}
