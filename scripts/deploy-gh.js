const fs = require("fs")
const path = require("path")
const argv = require("yargs").argv
const message = (argv.m !== true && argv.m) || "Done"

// CNAME will be created or overwritten by default.
fs.copyFileSync(
  path.resolve("CNAME"),
  path.resolve(__dirname, "../public", "CNAME")
)

