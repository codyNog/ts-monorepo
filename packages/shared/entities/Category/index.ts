import { generateSchema } from "@anatine/zod-openapi";
import { z } from "zod";

export const zodCategory = z.object({ uid: z.string(), name: z.string() });

export type Category = z.infer<typeof zodCategory>;

export const categorySchema = generateSchema(zodCategory);
export const categoriesSchema = generateSchema(z.array(zodCategory));
