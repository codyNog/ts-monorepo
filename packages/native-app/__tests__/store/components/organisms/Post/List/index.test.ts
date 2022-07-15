import { beforeAll, describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import { mocks } from "@my/shared/mocks";
import { startTestServer } from "@my/shared/front/libs/msw";
import { usePostList } from "~/store/components/organisms/Post/List";

describe(
	"usePostList",
	() => {
		beforeAll(() => {
			startTestServer();
		});

		it(
			"初期状態",
			async () => {
				const { result, waitForNextUpdate } = renderHook(() => usePostList());

				expect(result.current.posts).toBe(undefined);

				await waitForNextUpdate();

				expect(result.current.posts).toStrictEqual(mocks.post.posts);
			},
		);
	},
);
