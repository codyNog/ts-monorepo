import { Link as L } from "@web/ui/components/atoms/Link";
import { MarginProps } from "@web/ui/components/style";
import { Link as RLink } from "react-router-dom";

type Props = MarginProps & { href: string; children: React.ReactNode };

export const Link = ({
	href,
	children,
	...marginProps
}: Props): JSX.Element => {
	return (
		<L {...marginProps}>
			<RLink to={href}>{children}</RLink>
		</L>
	);
};
