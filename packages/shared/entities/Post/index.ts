import { generateSchema } from "@anatine/zod-openapi";
import { z } from "zod";
import { zodCategory } from "../Category";

export const zodPost = z.object({
	uid: z.string(),
	title: z.string(),
	description: z.string(),
	published: z.boolean(),
	body: z.string(),
	authorId: z.string(),
	categories: z.array(zodCategory),
});

export type Post = z.infer<typeof zodPost>;

export const postSchema = generateSchema(zodPost);
export const postsSchema = generateSchema(z.array(zodPost));
