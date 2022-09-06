import {
	Accordion as CAccordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
} from "@chakra-ui/react";
import { MarginProps } from "../../style";

type Props = MarginProps & { title?: string; children?: React.ReactNode };

export const Accordion = ({
	children,
	title,
	...marginProps
}: Props): JSX.Element => {
	return (
		<CAccordion {...marginProps} allowToggle>
			<AccordionItem h={"100%"}>
				<AccordionButton>
					{title}
					<AccordionIcon ml={"auto"} />
				</AccordionButton>
				<AccordionPanel h={"100%"}>{children}</AccordionPanel>
			</AccordionItem>
		</CAccordion>
	);
};
