import { User } from "@my/shared/entities/User";
import { VStack } from "@web/ui/components/layouts";
import { Text } from "@web/ui/components";
import { Link } from "~/components/atoms/Link";

type Props = { href: (href: string) => string; user: User };

export const UserDetail = ({ user, href }: Props): JSX.Element => {
	return (
		<VStack>
			<Text>名前</Text>
			<Text>{user.name}</Text>
			<Link href={href(user.uid)}>投稿一覧へ</Link>
		</VStack>
	);
};
