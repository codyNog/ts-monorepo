import { Post } from "@my/shared/entities/Post";
import { prismaIncludeQuery } from "~/constants/prisma";
import { prisma } from "~/libs/prisma";
import { postImplModules } from "~/domain/repositories/Post/modules";
import { GetPostsQuery } from "@my/shared/api/Post/queries";

const include = prismaIncludeQuery.post;

const create = async (post: Post): Promise<Post> => {
	const data = postImplModules.createData(post);
	return await prisma.post.create({ data, include });
};

const getMany = async (query: GetPostsQuery): Promise<Post[]> => {
	return await prisma.post.findMany({
		include,
		where: {
			title: { contains: query.title },
			authorId: query.authorId || undefined,
		},
	});
};

const get = async (uid: string): Promise<Post> => {
	const post = await prisma.post.findUnique({ where: { uid }, include });
	if (!post) {
		throw 404;
	}
	return post;
};

const update = async (post: Post): Promise<Post> => {
	const data = postImplModules.updateData(post);

	return await prisma.post.update({ where: { uid: post.uid }, data, include });
};

const deletePost = async (uid: string): Promise<void> => {
	await prisma.post.delete({ where: { uid } });
};

export const PostImpl = { create, getMany, get, update, delete: deletePost };
