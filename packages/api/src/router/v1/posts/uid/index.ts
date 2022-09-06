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
	fastify.get<{ Params: GetPostParameter; Reply: Post }>(
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
		async ({ params }, reply) => {
			const post = await backend.post.get(params.uid);
			reply.send(post);
		},
	);
};

const put = async (fastify: FastifyInstance): Promise<void> => {
	fastify.put<{ Body: Post; Params: UpdatePostParameter; Reply: Post }>(
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
		async ({ body, params }, reply) => {
			const { uid } = params;
			if (body.uid !== uid) {
				throw 400;
			}

			const post = await backend.post.update(body);
			reply.send(post);
		},
	);
};

const deletePost = async (fastify: FastifyInstance): Promise<void> => {
	fastify.delete<{ Params: DeletePostParameter; Reply: number }>(
		routing.posts.uid,
		{
			schema: {
				description: "post一件削除",
				tags: ["Post"],
				summary: "post一件削除",
				params: deletePostParameterSchema,
			},
		},
		async ({ params }, reply) => {
			await backend.post.delete(params.uid);
			reply.send(200);
		},
	);
};

export const postUidRouter = async (
	fastify: FastifyInstance,
): Promise<void> => {
	get(fastify);
	put(fastify);
	deletePost(fastify);
};
