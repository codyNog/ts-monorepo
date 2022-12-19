import { useCallback } from "react";
import { Category } from "@my/shared/entities/Category";
import { Post } from "@my/shared/entities/Post";
import { backend } from "@my/shared/front/backend";
import { initialState } from "~/constants/state";
import { useForm } from "react-hook-form";

export const usePostForm = (postProps?: Post) => {
	const { watch, register, handleSubmit, setValue } = useForm<Post>({
		defaultValues: postProps || initialState.post,
	});

	const post = watch();

	const onChangeCategoryInput = useCallback(async (name: string) => {
		const options = await backend.category.getMany({ name });
		return options.map((elem) => ({
			...elem,
			label: elem.name,
			value: elem.uid,
		}));
	}, []);

	const addCategory = useCallback(
		(category: Category) => {
			setValue("categories", post.categories.concat(category));
		},
		[setValue, post],
	);

	const removeCategory = useCallback(
		(category: Category) => {
			setValue(
				"categories",
				post.categories.filter((elem) => elem.uid !== category.uid),
			);
		},
		[setValue, post],
	);

	return {
		post,
		setValue,
		addCategory,
		removeCategory,
		onChangeCategoryInput,
		register,
		handleSubmit,
	};
};

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
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
