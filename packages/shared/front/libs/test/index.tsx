import { render as tRender } from "@testing-library/react";
import React from "react";
import { ComponentProvider } from "../../../../web-ui/components";

const wrapper = ({ children }: { children: JSX.Element }) => {
	return <ComponentProvider>{children}</ComponentProvider>;
};

export const render = (ui: JSX.Element, options?: any) =>
	tRender(ui, { wrapper, ...options });
