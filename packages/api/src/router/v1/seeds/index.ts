import { FastifyInstance } from "fastify";
import { routing } from "~/constants/routing";
import { prisma } from "~/libs/prisma";
import { mocks } from "@my/shared/mocks";
import { userImplModules } from "~/domain/repositories/User/modules";

const transfer = async () => {
  const data = mocks.seeds.map((elem) =>
    prisma.user.create({ data: userImplModules.createData(elem) })
  );
  return await prisma.$transaction(data);
};

// 定義されたデータを実際のモデルへ登録する処理
const seed = async () => {
  console.log(`Start seeding ...`);

  await transfer();

  console.log(`Seeding finished.`);
};

const get = async (fastify: FastifyInstance): Promise<void> => {
  fastify.post(
    routing.seeds.root,
    {
      schema: {
        description: "シード作成",
        tags: ["Seeds"],
        summary: "シード作成",
      },
    },
    async (_, reply) => {
      await seed();
    }
  );
};

export const seedsRouter = async (fastify: FastifyInstance): Promise<void> => {
  get(fastify);
};
