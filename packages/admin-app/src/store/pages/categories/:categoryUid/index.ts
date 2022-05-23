import { useCallback } from "react";
import { useRouter } from "~/libs/router";
import { useCategory } from "@my/shared/front/store/domain/Category";
import { Category } from "@my/shared/entities/Category";
import { pagesPath } from "~/libs/$path";

type Query = { categoryUid: string };

export const useCategoryPage = () => {
  const { push } = useRouter();
  const { categoryUid } = useRouter().query as Query;
  const { getCategory, updateCategory } = useCategory();

  const { data: category, mutate } = getCategory(categoryUid);

  const submit = useCallback(
    async (category: Category) => {
      mutate(category, false);
      await updateCategory(category);
      mutate();
      push(pagesPath.categories.$url().pathname);
    },
    [mutate, updateCategory, push]
  );

  return { category, submit };
};
