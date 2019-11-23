/* global module */

module.exports = function(api) {
  api.cache(true);

  const presets = ["@babel/preset-env"];

  const plugins = [
    "@babel/transform-runtime",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-transform-react-display-name"
  ];

  return {
    presets,
    plugins
  };
};
