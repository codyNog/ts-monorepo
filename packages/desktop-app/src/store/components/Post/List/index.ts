import { GetPostsParameter } from "@my/shared/front/repositories/Post/types";
import { usePost } from "@my/shared/front/store/domain/Post";

export const usePostList = (parameterProps?: GetPostsParameter) => {
  const { getPosts } = usePost();

  const { data: posts } = getPosts({ ...parameterProps });

  return { posts };
};
