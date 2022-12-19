import { Spinner } from "@web/ui/components";
import { Suspense } from "react";
import { PostList } from "~/components/Post/List";
import { useUserPostsPage } from "~/store/pages/users/[uid]/posts";

const Component = () => {
	const { parameter } = useUserPostsPage();

	if (!parameter) {
		return null;
	}

	return (
		<Suspense fallback={<Spinner />}>
			<PostList parameter={parameter} />
		</Suspense>
	);
};

export default Component;
