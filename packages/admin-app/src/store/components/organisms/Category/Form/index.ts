import { useState, useCallback } from "react";
import { Category } from "@my/shared/entities/Category";
import { initialState } from "~/constants/state";

export const useCategoryForm = (categoryProps?: Category) => {
  const [category, setCategory] = useState<Category>(
    categoryProps || initialState.category
  );

  const onChangeName = useCallback(
    (name: string) => {
      setCategory((prev) => ({ ...prev, name }));
    },
    [setCategory]
  );

  return { category, onChangeName };
};
