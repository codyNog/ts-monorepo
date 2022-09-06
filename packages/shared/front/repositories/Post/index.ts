import { Post } from "../../../entities/Post";
import { env } from "../../env";
import { v1Client } from "../../libs/aspida";
import { postImplModules } from "./modules";
import { GetPostsParameter } from "./types";

const create = async (post: Post): Promise<Post> => {
	const { body } = postImplModules.create(post);
	return await v1Client.posts.$post({ body });
};

const getMany = async (param?: GetPostsParameter): Promise<Post[]> => {
	const { query } = postImplModules.getMany(param);
	return v1Client.posts.$get({ query });
};

const get = async (uid: string): Promise<Post> => {
	const { param } = postImplModules.get(uid);
	return v1Client.posts._uid(param.uid).$get();
};

const update = async (post: Post): Promise<Post> => {
	const { param, body } = postImplModules.update(post);
	return v1Client.posts._uid(param.uid).$put({ body });
};

const deletePost = async (uid: string): Promise<void> => {
	const { param } = postImplModules.delete(uid);
	return v1Client.posts._uid(param.uid).$delete();
};

export const PostImpl = { create, getMany, get, update, delete: deletePost };

if (env.NODE_ENV === "test" && import.meta.vitest) {
	const { describe, it, expect, beforeAll } = import.meta.vitest;
	const { mocks } = await import("../../../mocks");
	const { startTestServer } = await import("../../libs/msw");

	describe("postImpl", () => {
		beforeAll(() => {
			startTestServer();
		});

		it("get", async () => {
			const post = await PostImpl.get("foo");
			expect(post).toStrictEqual(mocks.post.post);
		});

		it("getMany", async () => {
			const post = await PostImpl.getMany();
			expect(post).toStrictEqual(mocks.post.posts);
		});
	});
}
