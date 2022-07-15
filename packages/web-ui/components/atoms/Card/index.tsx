import { Box } from "../../layouts/Box";
import { MarginProps } from "../../style";

type Props = MarginProps & { children: React.ReactNode };

export const Card = (props: Props) => (
	<Box
		p={4}
		width={300}
		boxShadow={"0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08)"}
		borderRadius={4}
		{...props}
	/>
);
