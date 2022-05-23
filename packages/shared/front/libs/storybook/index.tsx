import { ComponentProvider } from "../../components";

export const storybookParameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withChakra = (StoryFn: Function) => {
  return (
    <ComponentProvider>
      <div id="story-wrapper" style={{ minHeight: "100vh" }}>
        <StoryFn />
      </div>
    </ComponentProvider>
  );
};

export const storybookDecorators = [withChakra];
