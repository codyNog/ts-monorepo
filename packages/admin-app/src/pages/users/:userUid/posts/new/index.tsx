import { PostForm } from "~/components/organisms/Post/Form";
import { useUserPostNewPage } from "~/store/pages/users/:userUid/posts/new";

const Component = () => {
  const { submit } = useUserPostNewPage();
  return <PostForm submit={submit} />;
};

export default Component;
