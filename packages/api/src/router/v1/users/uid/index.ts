import { FastifyInstance } from "fastify";
import { routing } from "~/constants/routing";
import { backend } from "~/domain/backend";
import { User, userSchema } from "@my/shared/entities/User";
import {
  DeleteUserParameter,
  deleteUserParameterSchema,
  GetUserParameter,
  getUserParameterSchema,
  updateUserParameterSchema,
} from "@my/shared/api/User/parameters";
import { updateUserBodySchema } from "@my/shared/api/User/bodies";

const get = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get(
    routing.users.uid,
    {
      schema: {
        description: "user一件取得",
        tags: ["User"],
        summary: "user一件取得",
        params: getUserParameterSchema,
        response: { 200: userSchema },
      },
    },
    async (request, reply) => {
      const { uid } = request.params as GetUserParameter;
      const user = await backend.user.get(uid);
      reply.send(user);
    }
  );
};

const put = async (fastify: FastifyInstance): Promise<void> => {
  fastify.put(
    routing.users.uid,
    {
      schema: {
        description: "user編集",
        tags: ["User"],
        summary: "user編集",
        params: updateUserParameterSchema,
        body: updateUserBodySchema,
        response: { 200: userSchema },
      },
    },
    async (request, reply) => {
      const { body } = request;
      const user = await backend.user.update(body as User);
      reply.send(user);
    }
  );
};

const deleteUser = async (fastify: FastifyInstance): Promise<void> => {
  fastify.delete(
    routing.users.uid,
    {
      schema: {
        description: "user一件削除",
        tags: ["User"],
        summary: "user一件削除",
        params: deleteUserParameterSchema,
      },
    },
    async (request, reply) => {
      const { uid } = request.params as DeleteUserParameter;
      await backend.user.delete(uid);
      reply.send(200);
    }
  );
};

export const userUidRouter = async (
  fastify: FastifyInstance
): Promise<void> => {
  get(fastify);
  put(fastify);
  deleteUser(fastify);
};
