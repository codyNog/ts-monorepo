import { Menu as Component } from ".";

export default { title: "atoms/Menu" };

const menus = [
  { key: "foo", children: "foo", onClick: () => {} },
  { key: "bar", children: "bar", onClick: () => {} },
];

export const Menu = () => <Component menus={menus} />;
