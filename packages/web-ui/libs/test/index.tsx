import { render as tRender } from "@testing-library/react";
import { ComponentProvider } from "../../components/provider";

const wrapper = ({ children }: { children: JSX.Element }) => {
  return <ComponentProvider>{children}</ComponentProvider>;
};

export const render = (ui: JSX.Element, options?: any) =>
  tRender(ui, { wrapper, ...options });
