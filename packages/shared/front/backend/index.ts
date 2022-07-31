import { CategoryImpl } from "../repositories/Category";
import { PostImpl } from "../repositories/Post";
import { UserImpl } from "../repositories/User";

export const backend = {
	user: UserImpl,
	post: PostImpl,
	category: CategoryImpl,
};
