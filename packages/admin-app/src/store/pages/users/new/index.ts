import { useUser } from "@my/shared/front/store/domain/User";

export const useUserNewPage = () => {
	const { createUser } = useUser();

	const submit = createUser;

	return { submit };
};
