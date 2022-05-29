import { Center } from "@chakra-ui/react";
import { Spinner } from "../../atoms/Spinner";
import { MarginProps } from "../../style";

type Props = MarginProps;

export const CenteredSpinner = ({ ...marginProps }: Props): JSX.Element => {
  return (
    <Center h={"100%"} w={"100%"} {...marginProps}>
      <Spinner />
    </Center>
  );
};
