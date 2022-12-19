import { Suspense } from "react";
import { PostList } from "~/components/Post/List";

const Component = () => {
  return (
    <Suspense>
      <PostList />
    </Suspense>
  );
};

export default Component;
