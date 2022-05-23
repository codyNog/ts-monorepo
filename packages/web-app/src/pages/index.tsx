import { LoginForm } from "~/components/LoginForm";
import { useRootPage } from "~/store/pages";

const Component = () => {
  const { onSubmit } = useRootPage();

  return <LoginForm onSubmit={onSubmit} />;
};

export default Component;
