import { Flex, Box } from "@web/ui/components/layouts";
import { pagesPath } from "~/libs/$path";
import { Text, UnorderedList } from "@web/ui/components";
import { Link } from "~/components/atoms/Link";
import { MarginProps } from "@web/ui/components/style";

type Navigation = { href: string; title: string };

type LinkItemProps = MarginProps & Navigation;

const LinkItem = ({ href, title, ...marginProps }: LinkItemProps) => {
	return (
		<Link href={href} {...marginProps}>
      {title}
    </Link>
	);
};

const navigations: Navigation[] = [
	{ href: pagesPath.users.$url().pathname, title: "ユーザー一覧" },
	{ href: pagesPath.posts.$url().pathname, title: "投稿一覧" },
	{ href: pagesPath.categories.$url().pathname, title: "カテゴリー一覧" },
];

type DrawerProps = MarginProps;

const Drawer = ({ ...marginProps }: DrawerProps): JSX.Element => {
	return (
		<Box {...marginProps} h={"100%"} p={5} bgColor={"gray.200"}>
      <Text fontSize={"lg"}>管理画面</Text>
      <UnorderedList
        mt={4}
        items={navigations.map((elem) => ({
          key: elem.href,
          node: <LinkItem {...elem} />,
        }))}
      />
    </Box>
	);
};

type Props = { children?: React.ReactNode };

export const Layout = ({ children }: Props): JSX.Element => {
	return (
		<Flex h={"100vh"}>
      <Drawer />
      <Box flex={1} p={5}>
        {children}
      </Box>
    </Flex>
	);
};
