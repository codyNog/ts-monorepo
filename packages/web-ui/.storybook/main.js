const path = require("path");

module.exports = {
	stories: ["../**/index.stories.tsx"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: "@storybook/react",
	core: { builder: "@storybook/builder-vite" },
	viteFinal: async (config) => {
		return {
			...config,
			resolve: {
				...config.resolve,
				dedupe: ["@storybook/client-api"],
				alias: {
					...config.resolve.alias,
					"@emotion/core": path.resolve(
						__dirname,
						"../node_modules/@emotion/react",
					),
					"emotion-theming": path.resolve(
						__dirname,
						"../node_modules/@emotion/react",
					),
				},
			},
		};
	},
};
