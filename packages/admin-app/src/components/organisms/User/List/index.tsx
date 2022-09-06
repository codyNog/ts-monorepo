import { User } from "@my/shared/entities/User";
import { Accordion, Text, Button, CenteredSpinner } from "@web/ui/components";
import { MarginProps } from "@web/ui/components/style";
import { useUserList } from "~/store/components/organisms/User/List";
import { UserListForm } from "~/components/organisms/User/List/Form";
import { VStack, Flex, Scroll } from "@web/ui/components/layouts";
import { Link } from "~/components/atoms/Link";

type ItemProps =
	& MarginProps
	& { href?: string; user: User; onClickDeleteButton: (user: User) => void };

const Item = ({
	href,
	user,
	onClickDeleteButton,
	...marginProps
}: ItemProps): JSX.Element => (
	<Flex {...marginProps} alignItems={"center"}>
		<Link href={href}>
			<Text>{user.name}</Text>
		</Link>
		<Button
			color={"white"}
			bgColor={"red"}
			onClick={() => onClickDeleteButton(user)}
			ml={"auto"}
		>
			削除
		</Button>
	</Flex>
);

type Props = MarginProps & { href: (href: string) => string | undefined };

export const UserList = ({ href, ...marginProps }: Props): JSX.Element => {
	const { users, onClickDeleteButton, ...rest } = useUserList();

	return (
		<VStack {...marginProps}>
			<Accordion title={"ユーザーの検索条件"}>
				<UserListForm {...rest} />
			</Accordion>
			<Scroll>
				{!users && <CenteredSpinner />}
				{users &&
					users.map(
						(elem) => (
							<Item
								key={elem.uid}
								href={href(elem.uid)}
								user={elem}
								onClickDeleteButton={onClickDeleteButton}
							/>
						),
					)}
			</Scroll>
		</VStack>
	);
};
