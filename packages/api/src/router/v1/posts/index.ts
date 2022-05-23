import { FastifyInstance } from "fastify";
import { routing } from "~/constants/routing";
import { backend } from "~/domain/backend";
import { Post, postSchema, postsSchema } from "@my/shared/entities/post";
import {
  GetPostsQuery,
  getPostsQuerySchema,
} from "@my/shared/api/Post/queries";
import { postUidRouter } from "~/router/v1/posts/uid";
import { createPostBodySchema } from "@my/shared/api/Post/bodies";

const post = async (fastify: FastifyInstance): Promise<void> => {
  fastify.post(
    routing.posts.root,
    {
      schema: {
        description: "post新規作成",
        tags: ["Post"],
        summary: "post新規作成",
        body: createPostBodySchema,
        response: { 200: postSchema },
      },
    },
    async (request, reply) => {
      const { body } = request;
      const post: Post = await backend.post.create(body as Post);
      reply.send(post);
    }
  );
};

const get = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get(
    routing.posts.root,
    {
      schema: {
        description: "post一覧取得",
        tags: ["Post"],
        summary: "post一覧取得",
        querystring: getPostsQuerySchema,
        response: { 200: postsSchema },
      },
    },
    async (request, reply) => {
      type Request = { query: GetPostsQuery };
      const { query } = request as Request;
      const posts: Post[] = await backend.post.getMany(query);
      reply.send(posts);
    }
  );
};

const rootRouter = async (fastify: FastifyInstance): Promise<void> => {
  post(fastify);
  get(fastify);
};

export const postsRouter = async (fastify: FastifyInstance): Promise<void> => {
  rootRouter(fastify);
  postUidRouter(fastify);
};
