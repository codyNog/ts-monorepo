import { useRouter } from "~/libs/router";
import { useUser } from "@my/shared/front/store/domain/User";
import { User } from "@my/shared/entities/User";
import { useCallback, useState } from "react";
import { pagesPath } from "~/libs/$path";
import { usePromise } from "@my/shared/front/store/utils/Promise";

type Query = { userUid: string };

export const useUserPage = () => {
  const { userUid } = useRouter().query as Query;
  const { onError, onSuccess } = usePromise();
  const { getUser, updateUser } = useUser();
  const [isEditing, setEditing] = useState(false);

  const { data: user, mutate, isValidating } = getUser(userUid);

  const href = (href: string) =>
    pagesPath.users[":userUid"].posts.$url().pathname.replace(":userUid", href);

  const submit = useCallback(
    async (user: User) => {
      mutate(user, false);
      await updateUser(user).catch(() =>
        onError("ユーザーを更新できませんでした")
      );
      onSuccess("ユーザーを更新しました");
      mutate();
    },
    [mutate, updateUser, onError, onSuccess]
  );

  return { user, href, submit, isValidating, isEditing, setEditing };
};
