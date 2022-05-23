import { generateSchema } from "@anatine/zod-openapi";
import { z } from "zod";

const getPostParameter = z.object({ uid: z.string() });

export type GetPostParameter = z.infer<typeof getPostParameter>;
export const getPostParameterSchema = generateSchema(getPostParameter);

const updatePostParameter = z.object({ uid: z.string() });

export type UpdatePostParameter = z.infer<typeof updatePostParameter>;
export const updatePostParameterSchema = generateSchema(updatePostParameter);

const deletePostParameter = z.object({ uid: z.string() });

export type DeletePostParameter = z.infer<typeof deletePostParameter>;
export const deletePostParameterSchema = generateSchema(deletePostParameter);
