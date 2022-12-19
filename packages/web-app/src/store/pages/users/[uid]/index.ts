import { useRouter } from "next/router";

type Query = { uid: string };

export const useUserPage = () => {
  const { uid } = useRouter().query as Query;

  return { uid };
};
