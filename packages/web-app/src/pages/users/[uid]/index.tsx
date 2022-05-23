import { UserDetail } from "~/components/User/Detail";
import { useUserPage } from "~/store/pages/users/[uid]";

const Component = () => {
  const { user } = useUserPage();

  if (!user) return null;

  return <UserDetail user={user} />;
};

export default Component;
