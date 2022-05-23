import { useCallback, useState } from "react";
import { Form, VStack } from "@my/shared//front/components/layouts";
import { GetUsersParameter } from "@my/shared/front/repositories/User/types";
import { Button, Input, Label } from "@my/shared//front/components";
import { MarginProps } from "@my/shared/front/components/style";

type FormProps = MarginProps & {
  parameter: GetUsersParameter;
  submit: (parameter: GetUsersParameter) => void;
};

export const UserListForm = ({
  parameter: parameterProps,
  submit: onSubmit,
  ...marginProps
}: FormProps) => {
  const [parameter, setParameter] = useState<GetUsersParameter>(parameterProps);

  const onChangeName = useCallback(
    (name: string) => {
      setParameter((prev) => ({ ...prev, name }));
    },
    [setParameter]
  );

  const submit = useCallback(async () => {
    onSubmit(parameter);
  }, [parameter]);

  return (
    <Form {...marginProps}>
      <VStack>
        <Label htmlFor={"name"} label={"名前"}>
          <Input
            id={"name"}
            value={parameter.name || ""}
            onChange={onChangeName}
          />
        </Label>
        <Button onClick={submit}>送信</Button>
      </VStack>
    </Form>
  );
};
