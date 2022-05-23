import { generateSchema } from "@anatine/zod-openapi";
import { z } from "zod";

const GetCategoriesQuery = z.object({ name: z.string().optional() });

export type GetCategoriesQuery = z.infer<typeof GetCategoriesQuery>;
export const getCategoriesQuerySchema = generateSchema(GetCategoriesQuery);
