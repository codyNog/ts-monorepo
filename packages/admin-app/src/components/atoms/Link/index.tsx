import { Link as CLink } from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";

type Props = { href?: string; children: React.ReactNode };

export const Link = ({ href, children }: Props) => {
	if (!href) {
		return <CLink href={href}>{children}</CLink>;
	}

	return (
		<RLink to={href}>
      <CLink>{children}</CLink>
    </RLink>
	);
};
