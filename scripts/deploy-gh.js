const ghpages = require("gh-pages")
const fs = require("fs")
const path = require("path")

// CNAME will be created or overwritten by default.

fs.copyFileSync(path.resolve("CNAME"),
  path.resolve(__dirname, "../public", "CNAME"))

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/rodrigovive/rodrigovive.github.io",
    message: 'Adding blog,post and Seo'
  },
  () => {
    console.log("Deploy Complete!")
  },
)