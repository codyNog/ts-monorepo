import { useCallback } from "react";
import { useRouter } from "~/libs/router";
import { usePost } from "@my/shared/front/store/domain/Post";
import { Post } from "@my/shared/entities/Post";

type Query = { postUid: string };

export const usePostPage = () => {
	const { postUid } = useRouter().query as Query;
	const { getPost, updatePost } = usePost();

	const { data: post, mutate } = getPost(postUid);

	const submit = useCallback(
		async (post: Post) => {
			await updatePost(post);
			mutate();
		},
		[updatePost, mutate],
	);

	return { post, submit };
};
