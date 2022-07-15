import { useUser } from "@my/shared/front/store/domain/User";
import { useRouter } from "next/router";

type Query = { uid: string };

export const useUserPage = () => {
	const { uid } = useRouter().query as Query;
	const { getUser } = useUser();

	const { data: user } = getUser(uid);

	return { user };
};
