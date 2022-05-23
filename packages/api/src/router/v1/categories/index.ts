import { FastifyInstance } from "fastify";
import { routing } from "~/constants/routing";
import { backend } from "~/domain/backend";
import {
  Category,
  categorySchema,
  categoriesSchema,
} from "@my/shared/entities/category";
import {
  GetCategoriesQuery,
  getCategoriesQuerySchema,
} from "@my/shared/api/Category/queries";
import { categoryUidRouter } from "~/router/v1/categories/uid";
import { createCategoryBodySchema } from "@my/shared/api/Category/bodies";

const post = async (fastify: FastifyInstance): Promise<void> => {
  fastify.post(
    routing.categories.root,
    {
      schema: {
        description: "category新規作成",
        tags: ["Category"],
        summary: "category新規作成",
        body: createCategoryBodySchema,
        response: { 200: categorySchema },
      },
    },
    async (request, reply) => {
      const { body } = request;
      const category: Category = await backend.category.create(
        body as Category
      );
      reply.send(category);
    }
  );
};

const get = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get(
    routing.categories.root,
    {
      schema: {
        description: "category一覧取得",
        tags: ["Category"],
        summary: "category一覧取得",
        querystring: getCategoriesQuerySchema,
        response: { 200: categoriesSchema },
      },
    },
    async (request, reply) => {
      const { query } = request;
      const categories: Category[] = await backend.category.getMany(
        query as GetCategoriesQuery
      );
      reply.send(categories);
    }
  );
};

const rootRouter = async (fastify: FastifyInstance): Promise<void> => {
  post(fastify);
  get(fastify);
};

export const categoriesRouter = async (
  fastify: FastifyInstance
): Promise<void> => {
  rootRouter(fastify);
  categoryUidRouter(fastify);
};
