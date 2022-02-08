module.exports = {
  siteMetadata: {
    title: `Christa Burch`,
    description: `Software engineer focused on frontend web development and user experience. Web portfolio.`,
    author: `@cweave`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Christa Burch`,
        short_name: `Christa Burch`,
        start_url: `/`,
        background_color: `hsl(290, 34%, 10%)`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `hsl(290, 34%, 10%)`,
        display: `standalone`,
        icon: `src/assets/burch.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
}
