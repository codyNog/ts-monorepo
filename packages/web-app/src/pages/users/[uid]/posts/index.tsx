import { PostList } from "~/components/Post/List";
import { useUserPostsPage } from "~/store/pages/users/[uid]/posts";

const Component = () => {
	const { parameter } = useUserPostsPage();

	if (!parameter) {
		return null;
	}

	return <PostList parameter={parameter} />;
};

export default Component;
