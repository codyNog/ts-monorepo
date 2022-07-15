import { Post } from "@my/shared/entities/Post";
import { GetPostsParameter } from "@my/shared/front/repositories/Post/types";
import { Box } from "@native/ui/components/layouts/Box";
import { VStack } from "@native/ui/components/layouts/Stack";
import { Text } from "@native/ui/components/atoms/Text";
import { usePostList } from "~/store/components/organisms/Post/List";
import { PostListForm } from "~/components/organisms/Post/List/Form";

type ItemProps = { post: Post };

const Item = ({ post }: ItemProps) => {
	return (
		<Box>
      <Text>{post.title}</Text>
    </Box>
	);
};

type Props = { parameter?: GetPostsParameter };

export const PostList = ({ parameter: parameterProps }: Props): JSX.Element => {
	const { posts, submit } = usePostList(parameterProps);

	return (
		<Box>
      <PostListForm submit={submit} />
      {!posts && null}
      {posts && (
        <VStack space={2}>
          {posts.map((elem) => (
            <Item key={elem.uid} post={elem} />
          ))}
        </VStack>
      )}
    </Box>
	);
};
