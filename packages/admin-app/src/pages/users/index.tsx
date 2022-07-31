import { UserList } from "~/components/organisms/User/List";
import { pagesPath } from "~/libs/$path";

const Component = () => {
	const href = (href: string) =>
		pagesPath.users[":userUid"].$url().pathname.replace(":userUid", href);

	return <UserList href={href} />;
};

export default Component;
