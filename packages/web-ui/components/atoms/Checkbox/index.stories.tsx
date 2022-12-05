import { Checkbox as Component, Props } from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
	title: "atoms/Checkbox",
	component: Component,
} as ComponentMeta<typeof Component>;

const LABEL = "check!";

const Template: ComponentStory<typeof Component> = (props: Props) => (
	<Component {...props}>{LABEL}</Component>
);
export const EmptyCheckbox = Template.bind({});

export const FilledCheckbox = Template.bind({});
FilledCheckbox.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);

	await userEvent.click(canvas.getByText(LABEL));
};
