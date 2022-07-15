import { PostList } from "~/components/organisms/Post/List";
import { useUserPostsPage } from "~/store/pages/users/:userUid/posts";

const Component = () => {
	const { href, parameter } = useUserPostsPage();

	return <PostList href={href} parameter={parameter} />;
};

export default Component;
