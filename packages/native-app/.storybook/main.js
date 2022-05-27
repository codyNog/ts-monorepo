module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  // https://zenn.dev/himorishige/scraps/8cca98dc9120d2
  webpackFinal: (config) => {
    config.resolve.alias = {
      "react-native$": "react-native-web",
    };
    // https://github.com/react-native-svg/react-native-svg/issues/1553#issuecomment-1011487502
    config.resolve.extensions.unshift(".web.js");
    return config;
  },
};
