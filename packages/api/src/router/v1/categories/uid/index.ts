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
	fastify.get<{ Params: GetCategoryParameter; Reply: Category }>(
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
		async ({ params }, reply) => {
			const category = await backend.category.get(params.uid);
			reply.send(category);
		},
	);
};

const put = async (fastify: FastifyInstance): Promise<void> => {
	fastify.put<{ Body: Category; Reply: Category }>(
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
		async ({ body }, reply) => {
			const category = await backend.category.update(body);
			reply.send(category);
		},
	);
};

const deleteCategory = async (fastify: FastifyInstance): Promise<void> => {
	fastify.delete<{ Params: DeleteCategoryParameter }>(
		routing.categories.uid,
		{
			schema: {
				description: "category一件削除",
				tags: ["Category"],
				summary: "category一件削除",
				params: deleteCategoryParameterSchema,
			},
		},
		async ({ params }, reply) => {
			await backend.category.delete(params.uid);
			reply.send(200);
		},
	);
};

export const categoryUidRouter = async (
	fastify: FastifyInstance,
): Promise<void> => {
	get(fastify);
	put(fastify);
	deleteCategory(fastify);
};
