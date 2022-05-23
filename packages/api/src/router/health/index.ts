import { generateSchema } from "@anatine/zod-openapi";
import { FastifyInstance } from "fastify";
import { z } from "zod";
import { routing } from "~/constants/routing";

const health = z.object({ status: z.string() });

const healthSchema = generateSchema(health);

const get = async (fastify: FastifyInstance): Promise<void> => {
	fastify.get(
		routing.health.root,
		{
			schema: {
				description: "ヘルスチェック",
				tags: ["Health"],
				summary: "ヘルスチェック",
				response: { 200: healthSchema },
			},
		},
		async (_, reply) => {
			reply.status(200).send({ status: "ok" });
		},
	);
};

export const healthRouter = async (fastify: FastifyInstance): Promise<void> => {
	get(fastify);
};
