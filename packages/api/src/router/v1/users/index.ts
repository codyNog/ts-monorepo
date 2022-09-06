import { FastifyInstance } from "fastify";
import { routing } from "~/constants/routing";
import { backend } from "~/domain/backend";
import { User, userSchema, usersSchema } from "@my/shared/entities/User";
import { userUidRouter } from "~/router/v1/users/uid";
import {
	getUsersQuerySchema,
	GetUsersQuery,
} from "@my/shared/api/User/queries";
import { createUserBodySchema } from "@my/shared/api/User/bodies";

const post = async (fastify: FastifyInstance): Promise<void> => {
	fastify.post<{ Body: User; Reply: User }>(
		routing.users.root,
		{
			schema: {
				description: "user新規作成",
				tags: ["User"],
				summary: "user新規作成",
				body: createUserBodySchema,
				response: { 200: userSchema },
			},
		},
		async ({ body }, reply) => {
			const user: User = await backend.user.create(body);
			reply.send(user);
		},
	);
};

const get = async (fastify: FastifyInstance): Promise<void> => {
	fastify.get<{ Querystring: GetUsersQuery; Reply: User[] }>(
		routing.users.root,
		{
			schema: {
				description: "user一覧取得",
				tags: ["User"],
				summary: "user一覧取得",
				querystring: getUsersQuerySchema,
				response: { 200: usersSchema },
			},
		},
		async ({ query }, reply) => {
			const users: User[] = await backend.user.getMany(query);
			reply.send(users);
		},
	);
};

const rootRouter = async (fastify: FastifyInstance): Promise<void> => {
	post(fastify);
	get(fastify);
};

export const usersRouter = async (fastify: FastifyInstance): Promise<void> => {
	rootRouter(fastify);
	userUidRouter(fastify);
};
