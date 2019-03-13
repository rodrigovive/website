module.exports = {

  siteMetadata: {
    title: "Rodrigo Viveros | Back-end Dev",
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
    "gatsby-transformer-remark",
  ],

}