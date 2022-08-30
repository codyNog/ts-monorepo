import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Select } from "@web/ui/components";
import { within, userEvent } from "@storybook/testing-library";

export default { component: Select } as ComponentMeta<typeof Select>;

export const Primary: ComponentStoryObj<typeof Select> = {
  args: {
    options: [{ value: "foo", label: "foo" }],
    placeholder: "入力してください",
  },
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole("combobox", {}));
};
