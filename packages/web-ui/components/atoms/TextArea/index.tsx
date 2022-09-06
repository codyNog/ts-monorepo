import { Textarea as CTextArea, TextareaProps } from "@chakra-ui/react";

type Props =
	& Omit<TextareaProps, "onChange">
	& { onChange: (value: string) => void };

export const TextArea = (props: Props) => (
	<CTextArea
		{...props}
		onChange={(e) => props.onChange(e.currentTarget.value)}
	/>
);
