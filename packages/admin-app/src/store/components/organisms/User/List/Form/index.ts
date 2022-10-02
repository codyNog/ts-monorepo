import { GetUsersParameter } from "@my/shared/front/repositories/User/types";
import { useForm } from "react-hook-form";
import { initialState } from "~/constants/state";

export const useUserListForm = (defaultValues?: GetUsersParameter) => {
  const { register, watch, handleSubmit } = useForm<GetUsersParameter>({
    defaultValues: defaultValues || initialState.getUsersParameter,
  });

  const parameter = watch();

  return { parameter, register, handleSubmit };
};
