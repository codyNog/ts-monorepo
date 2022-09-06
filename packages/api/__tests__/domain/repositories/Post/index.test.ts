import { mocks } from "@my/shared/mocks";
import { PostImpl } from "~/domain/repositories/Post";
import { expect, it, describe } from "vitest";

describe("PostImpl", () => {
	it("getMany", async () => {
		const posts = await PostImpl.getMany({});
		expect(posts).toStrictEqual([]);
	});

	it("create", async () => {
		const post = await PostImpl.create(mocks.post.post);
		expect(post);
		const posts = await PostImpl.getMany({});
		expect(posts).toStrictEqual([post]);
	});

	it("getPost", async () => {
		const newPost = await PostImpl.get(mocks.post.post.uid);
		expect(newPost).toStrictEqual(mocks.post.post);
	});

	it("update", async () => {
		const post = { ...mocks.post.post, name: "aaa" };
		await PostImpl.update(post);
		const newPost = await PostImpl.get(post.uid);
		expect(newPost).toStrictEqual(post);
		const posts = await PostImpl.getMany({});
		expect(posts).toStrictEqual([newPost]);
	});

	it("delete", async () => {
		const posts = await PostImpl.getMany({});
		const post = posts[0];
		await PostImpl.delete(post.uid);
		const newPosts = await PostImpl.getMany({});
		expect(newPosts).toStrictEqual([]);
	});
});
