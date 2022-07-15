import { StackProps } from "@chakra-ui/react";
import { VStack } from "../Stack";

export const Scroll = (props: StackProps) => (
	<VStack {...props} flex={1} overflow={["hidden", "scroll"]} />
);
