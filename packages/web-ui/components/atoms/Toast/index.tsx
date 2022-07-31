import { Box } from "../../layouts/Box";

type Props = { message: string; bgColor?: string };

export const Toast = ({ bgColor, message }: Props) => (
	<Box color="white" p={3} bgColor={bgColor || "green.400"}>
    {message}
  </Box>
);
