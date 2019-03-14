module.exports = {

  siteMetadata: {
    title: "Rodrigo Viveros | Back-end Dev",
    titleTemplate: "%s · Rodrigo Viveros",
    description:
      "Javascript Developer",
    url: "https://rodrigoviveros.me",
    image: "/images/personx480.png",
    twitterUsername: "@RodrigoVCordova",
  },

  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "files",
        path: `${__dirname}/src/markdown`,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `GatsbyJS`,
    //     short_name: `GatsbyJS`,
    //     start_url: `/`,
    //     background_color: `#f7f0eb`,
    //     theme_color: `#a2466c`,
    //     // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
    //     // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
    //     display: `standalone`,
    //     icon: `src/images/personx480.png`, // This path is relative to the root of the site.
    //     include_favicon: true, // Include favicon
    //   },
    // },
  ],

}