import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu as CMenu, MenuButton, MenuList, MenuItem, MenuItemProps, Button } from "@chakra-ui/react";
import { MarginProps } from "../../style";

type Menus = MenuItemProps & { key: string };

type Props = MarginProps & { menus: Menus[] };

export const Menu = ({ menus }: Props) => (
	<CMenu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
      Actions
    </MenuButton>
    <MenuList>
      {menus.map(({ key, ...rest }) => (
        <MenuItem key={key} {...rest} />
      ))}
    </MenuList>
  </CMenu>
);
