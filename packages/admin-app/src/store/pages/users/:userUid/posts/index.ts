import { GetPostsParameter } from "@my/shared/front/repositories/Post/types";
import { pagesPath } from "~/libs/$path";
import { useRouter } from "~/libs/router";

type Query = { userUid: string };

export const useUserPostsPage = () => {
	const { userUid } = useRouter().query as Query;

	const href = (href: string) =>
		pagesPath.posts[":postUid"].$url().pathname.replace(":postUid", href);

	const parameter: GetPostsParameter = { authorId: userUid };

	return { href, parameter };
};
