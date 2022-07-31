import { Post } from "@my/shared/entities/Post";
import { usePost } from "@my/shared/front/store/domain/Post";
import { useCallback } from "react";
import { pagesPath } from "~/libs/$path";
import { useRouter } from "~/libs/router";

type Query = { userUid: string };

export const useUserPostNewPage = () => {
	const { createPost } = usePost();
	const { push, query } = useRouter();
	const { userUid } = query as Query;

	const submit = useCallback(
		async (post: Post) => {
			const data: Post = { ...post, authorId: userUid };
			await createPost(data);
			const path = pagesPath.users[":userUid"].$url().pathname.replace(
				":userUid",
				userUid,
			);
			if (!path) {
				return null;
			}
			push(path);
		},
		[userUid, createPost, push],
	);

	return { submit };
};
