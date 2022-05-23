import { useCallback } from "react";
import useSWR from "swr";
import { backend } from "../../../backend";
import { Category } from "../../../../entities/Category";
import { swrConfig } from "../../../libs/swr";
import { GetCategoriesParameter } from "../../../repositories/Category/types";

const useGetCategory = (uid: string) =>
  useSWR<Category>(
    ["category", uid],
    () => backend.category.get(uid),
    swrConfig
  );

const useGetCategories = (query: GetCategoriesParameter) =>
  useSWR<Category[]>(
    ["categories", query],
    () => backend.category.getMany(query),
    swrConfig
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
