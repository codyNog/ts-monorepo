import { FormLabel, FormLabelProps } from "@chakra-ui/react";
import { Text } from "../Text";

type Props = FormLabelProps & { label: string };

export const Label = (props: Props) => (
	<FormLabel {...props} m={0}>
    <Text mb={1}>{props.label}</Text>
    {props.children}
  </FormLabel>
);
