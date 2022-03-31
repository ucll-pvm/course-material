const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/app.tsx",
  output: { // options related to how webpack emits results
    path:path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // configuration regarding modules
  module: {
    // rules for modules (configure loaders, parser options, etc.)
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: /node_modules/,
        loader: "ts-loader",
      }
    ]
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving of loaders)
    modules: ["node_modules",path.resolve(__dirname, "app")],
    // directories where to look for modules (in order)
    extensions: [".ts", ".tsx", ".ts"],
    // extensions that are used
  },
  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.
  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory
  ignoreWarnings: [/warning/],
  stats: "errors-only",
}