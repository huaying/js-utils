const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js-utils.js",
    library: "jsUtils",
    libraryTarget: "umd",
  },
};
