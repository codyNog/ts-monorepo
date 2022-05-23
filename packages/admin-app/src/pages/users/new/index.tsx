import { UserForm } from "~/components/organisms/User/Form";
import { useUserNewPage } from "~/store/pages/users/new";

const Component = () => {
  const { submit } = useUserNewPage();

  return <UserForm submit={submit} />;
};

export default Component;
