import { useCallback, useState } from "react";
import { User } from "@my/shared/entities/User";
import { GetUsersParameter } from "@my/shared/front/repositories/User/types";
import { useUser } from "@my/shared/front/store/domain/User";
import { initialState } from "~/constants/state";

export const useUserList = () => {
  const [parameter, setParameter] = useState<GetUsersParameter>(
    initialState.getUsersParameter
  );
  const { getUsers, deleteUser } = useUser();

  const submit = setParameter;

  const { data: users, mutate } = getUsers(parameter);

  const onClickDeleteButton = useCallback(
    async (user: User) => {
      await deleteUser(user);
      mutate();
    },
    [mutate]
  );

  return { users, parameter, submit, onClickDeleteButton };
};
