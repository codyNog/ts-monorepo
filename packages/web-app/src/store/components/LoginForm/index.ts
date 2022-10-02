import { LoginParmeter } from "@my/shared/front/repositories/User/types";
import { useForm } from "react-hook-form";

const defaultValues: LoginParmeter = { name: "", password: "" };

export const useLoginForm = () => {
  const { register, watch, handleSubmit } = useForm<LoginParmeter>({
    defaultValues,
  });

  const parameter = watch();

  return { register, handleSubmit, parameter };
};
