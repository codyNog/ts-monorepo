import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from "@web/ui/components";

export default { component: Button } as ComponentMeta<typeof Button>;

export const Primary: ComponentStoryObj<typeof Button> = {
	args: { children: "送信する" },
};
