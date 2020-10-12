require("dotenv").config();
module.exports = {
  siteMetadata: {
    title: `RB`,
    titleEn: 'RB',
    description: `Site description - add text here(IS).`,
    descriptionEn: `Site description - add text here(EN).`,
    author: `Breyta`,
    backendUrl: process.env.GATSBY_WP_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg-images/
        }
      }
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        useACF: true,
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `${process.env.GATSBY_WP_URL}/graphql`,
      },
    }
  ],
}
