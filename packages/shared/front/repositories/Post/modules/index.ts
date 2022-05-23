import { CreatePostBody, UpdatePostBody } from "../../../../api/Post/bodies";
import {
  DeletePostParameter,
  GetPostParameter,
  UpdatePostParameter,
} from "../../../../api/Post/parameters";
import { Post } from "../../../../entities/Post";
import { GetPostsQuery } from "../../../../api/Post/queries";
import { GetPostsParameter } from "../types";

type Create = {
  body: CreatePostBody;
};

const create = (post: Post): Create => {
  const body: CreatePostBody = post;
  return { body };
};

type Get = {
  param: GetPostParameter;
};

const get = (uid: string): Get => {
  const param: GetPostParameter = { uid };
  return { param };
};

type GetMany = {
  query: GetPostsParameter | undefined;
};

const getMany = (param?: GetPostsParameter): GetMany => {
  const query: GetPostsQuery | undefined = param;
  return { query };
};

type Update = {
  param: UpdatePostParameter;
  body: UpdatePostBody;
};

const update = (post: Post): Update => {
  const param: UpdatePostParameter = { uid: post.uid };
  const body: UpdatePostBody = post;

  return { param, body };
};

type Delete = {
  param: DeletePostParameter;
};

const deletePost = (uid: string): Delete => {
  const param: DeletePostParameter = { uid };

  return { param };
};

export const postImplModules = {
  create,
  get,
  getMany,
  update,
  delete: deletePost,
};
