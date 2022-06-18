import { useCallback } from "react";
import { useSWR } from "../../../libs/swr";
import { backend } from "../../../backend";
import { Category } from "../../../../entities/Category";
import { GetCategoriesParameter } from "../../../repositories/Category/types";

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
