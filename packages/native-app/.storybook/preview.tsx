import { ComponentProvider } from "../src/components/provider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <ComponentProvider>
      <Story {...context} />
    </ComponentProvider>
  );
};
export const decorators = [withThemeProvider];
