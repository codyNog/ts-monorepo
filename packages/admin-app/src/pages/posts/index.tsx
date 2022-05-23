import { PostList } from "~/components/organisms/Post/List";
import { pagesPath } from "~/libs/$path";

const Component = () => {
  const href = (href: string) =>
    pagesPath.posts[":postUid"].$url().pathname.replace(":postUid", href);

  return <PostList href={href} />;
};

export default Component;
