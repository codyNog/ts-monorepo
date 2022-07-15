import { UnorderedList as UL, OrderedList as OL } from ".";

const items = [
	{ key: "foo", node: <div>foo</div> },
	{ key: "bar", node: <div>bar</div> },
];

export default { title: "atoms/List" };

export const UnorderedList = () => <UL items={items} />;
export const OrderedList = () => <OL items={items} />;
