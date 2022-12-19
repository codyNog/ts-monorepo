import { Category } from "@my/shared/entities/Category";
import { initialState } from "~/constants/state";
import { useForm } from "react-hook-form";

const defaultValues: Category = initialState.category;

export const useCategoryForm = (categoryProps?: Category) => {
	const { register, handleSubmit, watch } = useForm<Category>({
		defaultValues: categoryProps || defaultValues,
	});
	const category = watch();

	return { category, register, handleSubmit };
};

if (process.env.NODE_ENV === "test" && import.meta.vitest) {
	const { mocks } = await import("@my/shared/mocks");
	const { renderHook } = await import("@testing-library/react");
	const { startTestServer } = await import("@my/shared/front/libs/msw");

	describe("useCategoryForm()", () => {
		beforeAll(() => {
			startTestServer();
		});

		it("初期状態", () => {
			const { result } = renderHook(() => useCategoryForm());
			expect<Category>(result.current.category).toStrictEqual<Category>(
				defaultValues,
			);
		});
	});

	describe("useCategoryForm(mocks.category.category)", () => {
		beforeAll(() => {
			startTestServer();
		});

		it("初期状態", () => {
			const { result } = renderHook(() =>
				useCategoryForm(mocks.category.category),
			);
			expect<Category>(result.current.category).toStrictEqual<Category>(
				mocks.category.category,
			);
		});
	});
}
