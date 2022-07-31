import { useCallback, useState } from "react";
import { usePost } from "@my/shared/front/store/domain/Post";
import { GetPostsParameter } from "@my/shared/front/repositories/Post/types";
import { initialState } from "~/constants/state";
import { Post } from "@my/shared/entities/Post";

export const usePostList = (parameterProps?: GetPostsParameter) => {
	const { getPosts, deletePost } = usePost();
	const [parameter, setParameter] = useState(initialState.getPostsParameter);

	const { data: posts, mutate } = getPosts({ ...parameter, ...parameterProps });

	const submit = setParameter;

	const onClickDeleteButton = useCallback(
		async (post: Post) => {
			await deletePost(post);
			mutate();
		},
		[deletePost, mutate],
	);

	return { posts, parameter, submit, onClickDeleteButton };
};

if (!!import.meta.vitest) {
	const { describe, it, expect, beforeAll } = import.meta.vitest;
	const { mocks } = await import("@my/shared/mocks");
	const { renderHook } = await import("@testing-library/react-hooks");
	const { startTestServer } = await import("@my/shared/front/libs/msw");

	describe(
		"usePostList",
		() => {
			beforeAll(() => {
				startTestServer();
			});

			it(
				"初期状態",
				async () => {
					const { result, waitForNextUpdate } = renderHook(usePostList);
					expect<Post[] | undefined>(result.current.posts).toStrictEqual<
						Post[] | undefined
					>(undefined);

					await waitForNextUpdate();

					expect<Post[] | undefined>(result.current.posts).toStrictEqual<
						Post[] | undefined
					>(mocks.post.posts);
				},
			);
		},
	);
}
