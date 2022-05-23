import { useCallback } from "react";
import { Category } from "@my/shared/entities/Category";
import { useCategory } from "@my/shared/front/store/domain/Category";
import { pagesPath } from "~/libs/$path";
import { useRouter } from "~/libs/router";

export const useCategoryNewPage = () => {
  const { push } = useRouter();
  const { createCategory } = useCategory();

  const submit = useCallback(
    async (category: Category) => {
      await createCategory(category);
      push(pagesPath.categories.$url().pathname);
    },
    [createCategory, push]
  );

  return { submit };
};
