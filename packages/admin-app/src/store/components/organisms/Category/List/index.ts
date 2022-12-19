import { useCallback, useState } from "react";
import { GetCategoriesParameter } from "@my/shared/front/repositories/Category/types";
import { useCategory } from "@my/shared/front/store/domain/Category";
import { Category } from "@my/shared/entities/Category";
import { initialState } from "~/constants/state";

export const useCategoryList = () => {
  const { getCategories, deleteCategory } = useCategory();
  const [parameter, setGetCategoriesParameter] = useState(
    initialState.getCategoriesParameter
  );

  const { data: categories, mutate } = getCategories(parameter);

  const submit = useCallback(
    (parameter: GetCategoriesParameter) => {
      setGetCategoriesParameter(parameter);
    },
    [parameter]
  );

  const onClickDeleteButton = useCallback(
    async (category: Category) => {
      await deleteCategory(category);
      mutate();
    },
    [mutate]
  );

  return { categories, submit, parameter, onClickDeleteButton };
};

if (import.meta.vitest) {
  const { describe, it, expect, beforeAll } = import.meta.vitest;
  const { mocks } = await import("@my/shared/mocks");
  const { renderHook, waitFor } = await import("@testing-library/react");
  const { startTestServer } = await import("@my/shared/front/libs/msw");

  describe("useCategoryList", () => {
    beforeAll(() => {
      startTestServer();
    });

    it("初期状態", async () => {
      const { result } = renderHook(useCategoryList);
      expect<Category[] | undefined>(result.current.categories).toStrictEqual<
        Category[] | undefined
      >(undefined);

      waitFor(() => {
        expect<Category[] | undefined>(result.current.categories).toStrictEqual<
          Category[] | undefined
        >(mocks.category.categories);
      });
    });
  });
}
