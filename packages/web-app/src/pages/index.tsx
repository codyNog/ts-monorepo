import { Suspense } from "react";
import { LoginForm } from "~/components/LoginForm";
import { useRootPage } from "~/store/pages";

const Component = () => {
  const { onSubmit } = useRootPage();

  return (
    <Suspense>
      <LoginForm onSubmit={onSubmit} />
    </Suspense>
  );
};

export default Component;
