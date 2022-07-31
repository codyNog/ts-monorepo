import { Switch as CSwitch, SwitchProps } from "@chakra-ui/react";

type Props =
	& Omit<SwitchProps, "checked" | "onChange">
	& { checked: boolean; onChange: (e: boolean) => void };

export const Switch = (props: Props) => (
	<CSwitch {...props} onChange={(e) => props.onChange(e.currentTarget.checked)} />
);
