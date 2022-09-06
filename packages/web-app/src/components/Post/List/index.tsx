import { Card } from "@web/ui/components";
import { VStack } from "@web/ui/components/layouts";
import { GetPostsParameter } from "@my/shared/front/repositories/Post/types";
import { usePostList } from "~/store/components/Post/List";

type Props = { parameter?: GetPostsParameter };

export const PostList = ({ parameter }: Props) => {
	const { posts } = usePostList(parameter);

	if (!posts) {
		return null;
	}

	return (
		<VStack>
			{posts.map(
				(elem) => (
					<Card key={elem.uid}>{elem.title}</Card>
				),
			)}
		</VStack>
	);
};
