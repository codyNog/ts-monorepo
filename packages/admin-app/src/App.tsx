import { Router } from "~/router";
import { ComponentProvider } from "@my/shared/front/components";

const App = () => {
  return (
    <ComponentProvider>
      <Router />
    </ComponentProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
