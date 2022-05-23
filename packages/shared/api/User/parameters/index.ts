import { generateSchema } from "@anatine/zod-openapi";
import { z } from "zod";

const getUserParameter = z.object({ uid: z.string() });

export type GetUserParameter = z.infer<typeof getUserParameter>;
export const getUserParameterSchema = generateSchema(getUserParameter);

const updateUserParameter = z.object({ uid: z.string() });

export type UpdateUserParameter = z.infer<typeof updateUserParameter>;
export const updateUserParameterSchema = generateSchema(updateUserParameter);

const deleteUserParameter = z.object({ uid: z.string() });

export type DeleteUserParameter = z.infer<typeof deleteUserParameter>;
export const deleteUserParameterSchema = generateSchema(deleteUserParameter);
