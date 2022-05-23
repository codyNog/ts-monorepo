import { backend } from "@my/shared/front/backend";
import { Button } from "@my/shared/front/components";
import { useCallback } from "react";

const Component = () => {
  const onClick = useCallback(async () => {
    await backend.seed.create();
  }, []);

  return <Button onClick={onClick}>シード作成</Button>;
};

export default Component;
