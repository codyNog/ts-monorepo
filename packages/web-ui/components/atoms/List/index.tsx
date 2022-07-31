import { ListItem as CListItem, OrderedList as COL, UnorderedList as CUL } from "@chakra-ui/react";
import { MarginProps } from "../../style";

type ListItemProps = MarginProps & { children: React.ReactNode };

const ListItem = (props: ListItemProps) => (
	<CListItem listStyleType={"none"} cursor={"pointer"} {...props} />
);

type Props =
	& MarginProps
	& { items: { node: React.ReactNode; key: string }[]; spacing?: number };

export const OrderedList = ({ items, spacing = 4, ...marginProps }: Props) => (
	<COL margin={0} spacing={spacing} {...marginProps}>
    {items.map(({ node, key }) => (
      <ListItem key={key}>{node}</ListItem>
    ))}
  </COL>
);

export const UnorderedList = ({ items, spacing = 4, ...marginProps }: Props) => (
	<CUL margin={0} spacing={spacing} {...marginProps}>
    {items.map(({ node, key }) => (
      <ListItem key={key}>{node}</ListItem>
    ))}
  </CUL>
);
