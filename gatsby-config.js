/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'mathurah\'s waterloo journey',
    description: 'Reflections on my terms and all the courses I\'ve taken'
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`, 
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
    {resolve: `gatsby-plugin-styled-components`},
  ],
}