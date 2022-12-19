import { Suspense } from "react";
import { UserDetail } from "~/components/User/Detail";
import { useUserPage } from "~/store/pages/users/[uid]";

const Component = () => {
  const { uid } = useUserPage();

  return (
    <Suspense>
      <UserDetail uid={uid} />
    </Suspense>
  );
};

export default Component;
