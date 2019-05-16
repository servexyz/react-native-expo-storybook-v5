const path = require("path");

module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    // include: path.resolve(__dirname, "./stories"),
    enforce: "pre"
  });

  return config;
};
