import { Post } from "@my/shared/entities/Post";
import {
  Accordion,
  CenteredSpinner,
  Button,
  Text,
} from "@my/shared/front/components";
import { MarginProps } from "@my/shared/front/components/style";
import { usePostList } from "~/store/components/organisms/Post/List";
import { PostListForm } from "~/components/organisms/Post/List/Form";
import { VStack, Flex, Scroll } from "@my/shared/front/components/layouts";
import { GetPostsParameter } from "@my/shared/front/repositories/Post/types";
import { Link } from "~/components/atoms/Link";

type ItemProps = MarginProps & {
  href?: string;
  post: Post;
  onClickDeleteButton: (post: Post) => void;
};

const Item = ({
  href,
  post,
  onClickDeleteButton,
  ...marginProps
}: ItemProps): JSX.Element => (
  <Flex {...marginProps} alignItems={"center"}>
    <Link href={href}>
      <Text>{post.title}</Text>
    </Link>
    <Button
      color={"white"}
      bgColor={"red"}
      onClick={() => onClickDeleteButton(post)}
      ml={"auto"}
    >
      削除
    </Button>
  </Flex>
);

type Props = {
  href: (href: string) => string | undefined;
  parameter?: GetPostsParameter;
};

export const PostList = ({
  href,
  parameter: parameterProps,
}: Props): JSX.Element => {
  const { posts, onClickDeleteButton, ...rest } = usePostList(parameterProps);

  return (
    <VStack>
      <Accordion title={"投稿検索条件"}>
        <PostListForm {...rest} />
      </Accordion>
      <Scroll>
        {!posts && <CenteredSpinner />}
        {posts &&
          posts.map((elem) => (
            <Item
              key={elem.uid}
              href={href(elem.uid)}
              post={elem}
              onClickDeleteButton={onClickDeleteButton}
            />
          ))}
      </Scroll>
    </VStack>
  );
};
