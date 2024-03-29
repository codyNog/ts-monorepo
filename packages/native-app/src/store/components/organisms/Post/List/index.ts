import { Post } from "@my/shared/entities/Post";
import { env } from "@my/shared/front/env";
import { GetPostsParameter } from "@my/shared/front/repositories/Post/types";
import { usePost } from "@my/shared/front/store/domain/Post";
import { useState, useCallback } from "react";

export const usePostList = (parameterProps?: GetPostsParameter) => {
	const { getPosts } = usePost();
	const [parameter, setParameter] = useState<GetPostsParameter>({});

	const submit = useCallback(
		(parameter: GetPostsParameter) => {
			setParameter(parameter);
		},
		[setParameter],
	);

	const { data: posts } = getPosts({ ...parameter, ...parameterProps });

	return { posts, submit };
};

if (env.NODE_ENV === "test" && import.meta.vitest) {
	const { mocks } = await import("@my/shared/mocks");
	const { renderHook, waitFor } = await import("@testing-library/react");
	const { startTestServer } = await import("@my/shared/front/libs/msw");

	describe("usePostList", () => {
		beforeAll(() => {
			startTestServer();
		});

		it("初期状態", async () => {
			const { result } = renderHook(() => usePostList());
			expect<Post[] | undefined>(result.current.posts).toStrictEqual<
				Post[] | undefined
			>(undefined);

			await waitFor(() => {
				expect<Post[] | undefined>(result.current.posts).toStrictEqual<
					Post[] | undefined
				>(mocks.post.posts);
			});
		});
	});
}
