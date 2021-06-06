/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 const path = require(`path`)

 module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'mathurah\'s waterloo journey',
    description: 'Reflections on my terms and all the courses I\'ve taken'
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`, 
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          { resolve: `gatsby-remark-highlight-code`},
        ],
      },
    },
    {resolve: `gatsby-plugin-styled-components`},
  ],
}