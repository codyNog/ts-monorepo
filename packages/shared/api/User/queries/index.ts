import { generateSchema } from "@anatine/zod-openapi";
import { z } from "zod";

const getUsersQuery = z.object({ name: z.string().optional() });

export type GetUsersQuery = z.infer<typeof getUsersQuery>;
export const getUsersQuerySchema = generateSchema(getUsersQuery);
