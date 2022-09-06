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
	fastify.get<{ Params: GetUserParameter; Reply: User }>(
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
		async ({ params }, reply) => {
			const user = await backend.user.get(params.uid);
			reply.send(user);
		},
	);
};

const put = async (fastify: FastifyInstance): Promise<void> => {
	fastify.put<{ Body: User; Reply: User }>(
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
		async ({ body }, reply) => {
			const user = await backend.user.update(body);
			reply.send(user);
		},
	);
};

const deleteUser = async (fastify: FastifyInstance): Promise<void> => {
	fastify.delete<{ Params: DeleteUserParameter }>(
		routing.users.uid,
		{
			schema: {
				description: "user一件削除",
				tags: ["User"],
				summary: "user一件削除",
				params: deleteUserParameterSchema,
			},
		},
		async ({ params }, reply) => {
			await backend.user.delete(params.uid);
			reply.send(200);
		},
	);
};

export const userUidRouter = async (
	fastify: FastifyInstance,
): Promise<void> => {
	get(fastify);
	put(fastify);
	deleteUser(fastify);
};
