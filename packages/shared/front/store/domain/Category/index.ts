import { useCallback } from "react";
import { useSWR } from "../../../libs/swr";
import { backend } from "../../../backend";
import { Category } from "../../../../entities/Category";
import { GetCategoriesParameter } from "../../../repositories/Category/types";
import { env } from "@my/shared/front/env";

const useGetCategory = (uid: string) =>
  useSWR<Category>(["category", uid], () => backend.category.get(uid));

const useGetCategories = (query: GetCategoriesParameter) =>
  useSWR<Category[]>(["categories", String(query)], () =>
    backend.category.getMany(query)
  );

export const useCategory = () => {
  const createCategory = useCallback(async (category: Category) => {
    return await backend.category.create(category);
  }, []);

  const getCategory = useGetCategory;
  const getCategories = useGetCategories;

  const updateCategory = useCallback(
    async (category: Category) => {
      const newCategory = await backend.category.update(category);
      return newCategory;
    },
    [getCategory]
  );

  const deleteCategory = useCallback(async (category: Category) => {
    await backend.category.delete(category.uid);
  }, []);

  return {
    createCategory,
    getCategory,
    getCategories,
    updateCategory,
    deleteCategory,
  };
};

if (env.NODE_ENV === "test" && !!import.meta.vitest) {
  const { describe, it, expect, beforeAll } = import.meta.vitest;
  const { mocks } = await import("../../../../mocks");
  const { renderHook } = await import("@testing-library/react-hooks");
  const { startTestServer } = await import("../../../libs/msw");

  const testHook = () => {
    const { getCategories } = useCategory();

    const { data: categories } = getCategories({});

    return { categories };
  };

  describe("useCategory", () => {
    beforeAll(() => {
      startTestServer();
    });

    it("初期状態", async () => {
      const { result, waitForNextUpdate } = renderHook(testHook);
      expect<Category[] | undefined>(result.current.categories).toStrictEqual<
        Category[] | undefined
      >(undefined);

      await waitForNextUpdate();

      expect<Category[] | undefined>(result.current.categories).toStrictEqual<
        Category[] | undefined
      >(mocks.category.categories);
    });
  });
}
