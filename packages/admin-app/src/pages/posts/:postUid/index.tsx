import { PostForm } from "~/components/organisms/Post/Form";
import { usePostPage } from "~/store/pages/posts/:postUid";

const Component = () => {
	const { post, submit } = usePostPage();

	if (!post) {
		return null;
	}

	return <PostForm post={post} submit={submit} />;
};

export default Component;
