import { Post } from "../../../entities/Post";
import { v1Client } from "../../libs/aspida";
import { postImplModules } from "./modules";
import { GetPostsParameter } from "./types";

const create = async (post: Post): Promise<Post> => {
  const { body } = postImplModules.create(post);
  return await v1Client.posts.$post({ body });
};

const getMany = async (param?: GetPostsParameter): Promise<Post[]> => {
  const { query } = postImplModules.getMany(param);
  return v1Client.posts.$get({ query });
};

const get = async (uid: string): Promise<Post> => {
  const { param } = postImplModules.get(uid);
  return v1Client.posts._uid(param.uid).$get();
};

const update = async (post: Post): Promise<Post> => {
  const { param, body } = postImplModules.update(post);
  return v1Client.posts._uid(param.uid).$put({ body });
};

const deletePost = async (uid: string): Promise<void> => {
  const { param } = postImplModules.delete(uid);
  return v1Client.posts._uid(param.uid).$delete();
};

export const PostImpl = { create, getMany, get, update, delete: deletePost };
