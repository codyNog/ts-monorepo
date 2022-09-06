import { useState, useCallback } from "react";
import { Category } from "@my/shared/entities/Category";
import { Post } from "@my/shared/entities/Post";
import { backend } from "@my/shared/front/backend";
import { initialState } from "~/constants/state";

export const usePostForm = (postProps?: Post) => {
	const [post, setPost] = useState<Post>(postProps || initialState.post);

	const onChangeTitle = useCallback(
		(title: string) => {
			setPost((prev) => ({ ...prev, title }));
		},
		[setPost],
	);

	const onChangeDescription = useCallback(
		(description: string) => {
			setPost((prev) => ({ ...prev, description }));
		},
		[setPost],
	);

	const onChangePublished = useCallback(
		(published: boolean) => {
			setPost((prev) => ({ ...prev, published }));
		},
		[setPost],
	);

	const onChangeBody = useCallback(
		(body: string) => {
			setPost((prev) => ({ ...prev, body }));
		},
		[setPost],
	);

	const onChangeCategoryInput = useCallback(async (name: string) => {
		const options = await backend.category.getMany({ name });
		return options.map(
			(elem) => ({ ...elem, label: elem.name, value: elem.uid }),
		);
	}, []);

	const addCategory = useCallback(
		(category: Category) => {
			setPost(
				(prev) => ({ ...prev, categories: prev.categories.concat(category) }),
			);
		},
		[setPost],
	);

	const removeCategory = useCallback(
		(category: Category) => {
			setPost(
				(prev) => ({
					...prev,
					categories: prev.categories.filter(
						(elem) => elem.uid !== category.uid,
					),
				}),
			);
		},
		[setPost],
	);

	return {
		post,
		setPost,
		onChangeTitle,
		onChangeDescription,
		onChangePublished,
		onChangeBody,
		addCategory,
		removeCategory,
		onChangeCategoryInput,
	};
};

if (import.meta.vitest) {
	const { describe, it, expect, beforeAll } = import.meta.vitest;
	const { mocks } = await import("@my/shared/mocks");
	const { renderHook } = await import("@testing-library/react");
	const { startTestServer } = await import("@my/shared/front/libs/msw");

	describe("usePostForm()", () => {
		beforeAll(() => {
			startTestServer();
		});

		it("初期状態", () => {
			const { result } = renderHook(() => usePostForm());
			expect<Post>(result.current.post).toStrictEqual<Post>(initialState.post);
		});
	});

	describe("usePostForm(mocks.post.post)", () => {
		beforeAll(() => {
			startTestServer();
		});

		it("初期状態", () => {
			const { result } = renderHook(() => usePostForm(mocks.post.post));
			expect<Post>(result.current.post).toStrictEqual<Post>(mocks.post.post);
		});
	});
}
