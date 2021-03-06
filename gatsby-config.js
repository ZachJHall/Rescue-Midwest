/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 module.exports = {

   plugins: [
     `gatsby-plugin-netlify-cms`,
     {
       resolve:`gatsby-source-filesystem`,
       options: {
         path: `${__dirname}/dogs`,
         name: `markdown-pages`,
        },
     },
      'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      }
    },
   ],

 };
