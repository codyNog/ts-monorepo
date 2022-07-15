import { Post } from "@my/shared/entities/Post";
import { Prisma } from "@prisma/client";

const createData = (post: Post): Prisma.PostUncheckedCreateInput => {
	const { uid: _, categories, ...rest } = post;

	return {
		...rest,
		categories: { connect: categories.map(({ uid }) => ({ uid })) },
	};
};

const updateData = (post: Post): Prisma.PostUncheckedUpdateInput => {
	const { categories, ...rest } = post;

	return {
		...rest,
		categories: { connect: categories.map(({ uid }) => ({ uid })) },
	};
};

export const postImplModules = { createData, updateData };
