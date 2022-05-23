import { Post, postSchema } from "../../../entities/Post";

export type CreatePostBody = Post;
export const createPostBodySchema = postSchema;

export type UpdatePostBody = Post;
export const updatePostBodySchema = postSchema;
