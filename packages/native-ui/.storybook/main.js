module.exports = {
	stories: ["../src/**/*.stories.tsx"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: "@storybook/react",
	webpackFinal: (config) => {
		config.resolve.alias = { "react-native$": "react-native-web" };
		config.resolve.extensions.unshift(".web.js");
		return config;
	},
};
