import { VStack as CVStack, StackProps } from "@chakra-ui/react";

export const VStack = (props: StackProps) => (
  <CVStack spacing={4} {...props} align={"stretch"} h={"100%"} />
);
