import fastify from "fastify";
import { v1Router } from "~/router/v1";
import { swagger } from "~/libs/swagger";
import { healthRouter } from "~/router/health";
import { env } from "~/constants/env";
import cors from "@fastify/cors";

const server = fastify({ logger: true });
server.addHook("onRoute", (opts) => {
  if (opts.path === "/api/health") {
    // @ts-ignore silent は Fastify で用意されているログレベルに存在しない
    opts.logLevel = "silent";
  }
});

server.register(cors, { origin: "*" });

if (env.ENABLE_DOCS) {
  swagger(server);
}
server.register(healthRouter, { prefix: "/api" });
server.register(v1Router, { prefix: "/api/v1" });

// eslint-disable-next-line import/no-default-export
export default server;

export const viteNodeApp = server;
