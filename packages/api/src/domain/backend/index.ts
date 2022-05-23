import { UserImpl } from "~/domain/repositories/User";
import { CategoryImpl } from "~/domain/repositories/Category";
import { PostImpl } from "~/domain/repositories/Post";

export const backend = {
	user: UserImpl,
	post: PostImpl,
	category: CategoryImpl,
};

export type Backend = typeof backend;
