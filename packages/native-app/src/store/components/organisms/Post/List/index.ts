import { GetPostsParameter } from "@my/shared/front/repositories/Post/types";
import { usePost } from "@my/shared/front/store/domain/Post";
import { useState, useCallback } from "react";

export const usePostList = (parameterProps?: GetPostsParameter) => {
  const { getPosts } = usePost();
  const [parameter, setParameter] = useState<GetPostsParameter>({});

  const submit = useCallback(
    (parameter: GetPostsParameter) => {
      setParameter(parameter);
    },
    [setParameter]
  );

  const { data: posts } = getPosts({ ...parameter, ...parameterProps });

  return { posts, submit };
};
