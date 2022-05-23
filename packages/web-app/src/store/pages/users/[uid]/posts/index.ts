import { GetPostsParameter } from "@my/shared/front/repositories/Post/types";
import { useRouter } from "next/router";
import { useMemo } from "react";

type Query = {
  uid: string;
};

export const useUserPostsPage = () => {
  const { uid } = useRouter().query as Query;

  const parameter: GetPostsParameter | undefined = useMemo(
    () => (uid ? { authorId: uid } : undefined),
    [uid]
  );

  return { parameter };
};
