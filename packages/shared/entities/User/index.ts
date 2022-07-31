import { generateSchema } from "@anatine/zod-openapi";
import { z } from "zod";
import { zodPost } from "../Post";

export const zodUserProfile = z.object({
	uid: z.string(),
	biography: z.string(),
});

export const zodUser = z.object({
	uid: z.string(),
	name: z.string(),
	posts: z.array(zodPost),
	profile: zodUserProfile.nullable(),
});

export type UserProfile = z.infer<typeof zodUserProfile>;
export type User = z.infer<typeof zodUser>;

export const userSchema = generateSchema(zodUser);
export const usersSchema = generateSchema(z.array(zodUser));
