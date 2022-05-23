import { FastifyInstance } from "fastify";
import { routing } from "~/constants/routing";
import { backend } from "~/domain/backend";
import { Post, postSchema } from "@my/shared/entities/Post";
import {
  DeletePostParameter,
  deletePostParameterSchema,
  GetPostParameter,
  getPostParameterSchema,
  UpdatePostParameter,
  updatePostParameterSchema,
} from "@my/shared/api/Post/parameters";
import { updatePostBodySchema } from "@my/shared/api/Post/bodies";

const get = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get(
    routing.posts.uid,
    {
      schema: {
        description: "post一件取得",
        tags: ["Post"],
        summary: "post一件取得",
        params: getPostParameterSchema,
        response: { 200: postSchema },
      },
    },
    async (request, reply) => {
      const { uid } = request.params as GetPostParameter;
      const post = await backend.post.get(uid);
      reply.send(post);
    }
  );
};

type UpdatePostRequest = { body: Post; params: UpdatePostParameter };

const put = async (fastify: FastifyInstance): Promise<void> => {
  fastify.put(
    routing.posts.uid,
    {
      schema: {
        description: "post編集",
        tags: ["Post"],
        summary: "post編集",
        body: updatePostBodySchema,
        response: { 200: postSchema },
        params: updatePostParameterSchema,
      },
    },
    async (request, reply) => {
      const { body, params } = request as UpdatePostRequest;
      const { uid } = params;
      if (body.uid !== uid) {
        throw 400;
      }

      const post = await backend.post.update(body as Post);
      reply.send(post);
    }
  );
};

const deletePost = async (fastify: FastifyInstance): Promise<void> => {
  fastify.delete(
    routing.posts.uid,
    {
      schema: {
        description: "post一件削除",
        tags: ["Post"],
        summary: "post一件削除",
        params: deletePostParameterSchema,
      },
    },
    async (request, reply) => {
      const { uid } = request.params as DeletePostParameter;
      await backend.post.delete(uid);
      reply.send(200);
    }
  );
};

export const postUidRouter = async (
  fastify: FastifyInstance
): Promise<void> => {
  get(fastify);
  put(fastify);
  deletePost(fastify);
};
