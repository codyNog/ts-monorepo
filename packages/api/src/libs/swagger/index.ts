import { FastifyInstance } from "fastify";
import fastifySwagger from "@fastify/swagger";

export const swagger = async (fastify: FastifyInstance): Promise<void> => {
  fastify.register(fastifySwagger, {
    routePrefix: "/docs",
    openapi: {
      info: { title: "API", description: "API仕様書", version: "0.1.0" },
    },
    exposeRoute: true,
  });
};
