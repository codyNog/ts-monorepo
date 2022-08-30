const path = require("path");

module.exports = {
  stories: ["../**/index.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": path.resolve(
            __dirname,
            "../node_modules/@emotion/react"
          ),
          "emotion-theming": path.resolve(
            __dirname,
            "../node_modules/@emotion/react"
          ),
        },
      },
    };
  },
};
