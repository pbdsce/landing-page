/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
// import './src/images/'

module.exports = {
   siteMetadata: {
    title: "Point Blank",
    description: "We are Point Blank",
    author: "@sparshkesari",
    siteUrl : "https://pbpage.netlify.app"
    
  },
  /* Your site config here */
  plugins: [    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`, `gatsby-plugin-react-helmet`,

    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    
  ],
  
}
