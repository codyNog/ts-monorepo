import { useUser } from "@my/shared/front/store/domain/User";

export const useUserDetail = (uid: string) => {
  const { getUser } = useUser();

  const { data: user } = getUser(uid);

  return { user };
};
