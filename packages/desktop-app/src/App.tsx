import { ComponentProvider } from "@web/ui/components";
import { Router } from "~/router";

export const App = () => {
  return (
    <ComponentProvider>
      <Router />
    </ComponentProvider>
  );
};
