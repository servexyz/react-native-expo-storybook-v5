const path = require("path");
const storysource = require.resolve("@storybook/addon-storysource/loader");

module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.jsx?$/,
    loaders: [storysource],
    include: path.resolve(__dirname, "../"), // this fixed it, I think.
    enforce: "pre"
  });

  return config;
};
