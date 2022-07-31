import { useCallback } from "react";
import { GetPostsParameter } from "../../../repositories/Post/types";
import { backend } from "../../../backend";
import { Post } from "../../../../entities/Post";
import { useSWR } from "../../../libs/swr";

const useGetPost = (uid: string) =>
	useSWR<Post>(["post", uid], () => backend.post.get(uid));

const useGetPosts = (query: GetPostsParameter) =>
	useSWR<Post[]>(["posts", String(query)], () => backend.post.getMany(query));

export const usePost = () => {
	const createPost = useCallback(
		async (post: Post) => {
			return await backend.post.create(post);
		},
		[],
	);

	const getPost = useGetPost;

	const getPosts = useGetPosts;

	const updatePost = useCallback(
		async (post: Post) => {
			return await backend.post.update(post);
		},
		[],
	);

	const deletePost = useCallback(
		async (post: Post) => {
			await backend.post.delete(post.uid);
		},
		[],
	);

	return { createPost, getPost, getPosts, updatePost, deletePost };
};
