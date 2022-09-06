import { Flex } from "@web/ui/components/layouts";

type Props = { children: React.ReactNode };

export const Layout = ({ children }: Props): JSX.Element => {
	return (
		<Flex flexDir={"column"} height={"100vh"}>
			{children}
		</Flex>
	);
};
