import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Button } from "@web/ui/components";

export default { component: Button } as ComponentMeta<typeof Button>;

export const Primary: ComponentStoryObj<typeof Button> = {
  args: { children: "送信する" },
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button", { name: "送信する" }));
};
