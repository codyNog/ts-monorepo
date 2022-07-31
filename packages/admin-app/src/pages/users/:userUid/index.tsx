import { UserDetail } from "~/components/organisms/User/Detail";
import { UserForm } from "~/components/organisms/User/Form";
import { useUserPage } from "~/store/pages/users/:userUid";

const Component = () => {
	const { user, href, submit, isEditing } = useUserPage();

	if (!user) {
		return null;
	}

	if (isEditing) {
		return <UserForm user={user} submit={submit} />;
	}

	return <UserDetail href={href} user={user} />;
};

export default Component;
