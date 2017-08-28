module.exports = {
  siteMetadata: {
    title: `Colors of SABF`,
  },
  plugins: [
    // typescript support
    `gatsby-plugin-typescript`,

    // add tags to <head/> from the body
    `gatsby-plugin-react-helmet`,
    // does a pushState on non-react links (markdown, etc)
    `gatsby-plugin-catch-links`,

    // parsing of images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // parse JSON files
    `gatsby-transformer-json`,

    // Data source: Stories (English)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stories-en`,
        path: `${__dirname}/stories/en`,
      },
    },

    // Data source: Stories (Spanish)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stories-es`,
        path: `${__dirname}/stories/es`,
      },
    },

    // parse and transform markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: true,
            },
          },

          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`
        ]
      }
    }
  ],
}
