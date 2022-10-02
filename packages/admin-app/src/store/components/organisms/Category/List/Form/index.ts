import { GetCategoriesParameter } from "@my/shared/front/repositories/Category/types";
import { useForm } from "react-hook-form";

export const useCategoryListForm = (parameter: GetCategoriesParameter) => {
  const { watch, register, handleSubmit } = useForm<GetCategoriesParameter>({
    defaultValues: parameter,
  });

  const category = watch();

  return { category, register, handleSubmit };
};
