import { FastifyInstance } from "fastify";
import { usersRouter } from "~/router/v1/users";
import { postsRouter } from "~/router/v1/posts";
import { categoriesRouter } from "~/router/v1/categories";

export const v1Router = async (fastify: FastifyInstance): Promise<void> => {
	usersRouter(fastify);
	postsRouter(fastify);
	categoriesRouter(fastify);
};
