import { usePost } from "@my/shared/front/store/domain/Post";

export const usePostNewPage = () => {
	const { createPost } = usePost();

	const submit = createPost;

	return { submit };
};
