import { FastifyInstance } from "fastify";
import { routing } from "~/constants/routing";
import { backend } from "~/domain/backend";
import { Category, categorySchema } from "@my/shared/entities/Category";
import {
  DeleteCategoryParameter,
  deleteCategoryParameterSchema,
  GetCategoryParameter,
  getCategoryParameterSchema,
  updateCategoryParameterSchema,
} from "@my/shared/api/Category/parameters";
import { updateCategoryBodySchema } from "@my/shared/api/Category/bodies";

const get = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get(
    routing.categories.uid,
    {
      schema: {
        description: "category一件取得",
        tags: ["Category"],
        summary: "category一件取得",
        params: getCategoryParameterSchema,
        response: { 200: categorySchema },
      },
    },
    async (request, reply) => {
      const { uid } = request.params as GetCategoryParameter;
      const category = await backend.category.get(uid);
      reply.send(category);
    }
  );
};

const put = async (fastify: FastifyInstance): Promise<void> => {
  fastify.put(
    routing.categories.uid,
    {
      schema: {
        description: "category編集",
        tags: ["Category"],
        summary: "category編集",
        params: updateCategoryParameterSchema,
        body: updateCategoryBodySchema,
        response: { 200: categorySchema },
      },
    },
    async (request, reply) => {
      const { body } = request;
      const category = await backend.category.update(body as Category);
      reply.send(category);
    }
  );
};

const deleteCategory = async (fastify: FastifyInstance): Promise<void> => {
  fastify.delete(
    routing.categories.uid,
    {
      schema: {
        description: "category一件削除",
        tags: ["Category"],
        summary: "category一件削除",
        params: deleteCategoryParameterSchema,
      },
    },
    async (request, reply) => {
      const { uid } = request.params as DeleteCategoryParameter;
      await backend.category.delete(uid);
      reply.send(200);
    }
  );
};

export const categoryUidRouter = async (
  fastify: FastifyInstance
): Promise<void> => {
  get(fastify);
  put(fastify);
  deleteCategory(fastify);
};
