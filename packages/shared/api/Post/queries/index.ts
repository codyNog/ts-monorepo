import { generateSchema } from "@anatine/zod-openapi";
import { z } from "zod";

const getPostsQuery = z.object({
	title: z.string().optional(),
	authorId: z.string().optional(),
});

export type GetPostsQuery = z.infer<typeof getPostsQuery>;
export const getPostsQuerySchema = generateSchema(getPostsQuery);
