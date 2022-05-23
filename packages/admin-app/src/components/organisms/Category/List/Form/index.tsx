import { Form, VStack } from "@my/shared/front/components/layouts";
import { GetCategoriesParameter } from "@my/shared/front/repositories/Category/types";
import { useCallback, useState } from "react";
import { Button, Input, Label } from "@my/shared/front/components";
import { MarginProps } from "@my/shared/front/components/style";

type Props = MarginProps & {
  parameter: GetCategoriesParameter;
  submit: (parameter: GetCategoriesParameter) => void;
};

export const CategoryListForm = ({
  parameter: parameterProps,
  submit: onSubmit,
  ...marginProps
}: Props) => {
  const [parameter, setParameter] =
    useState<GetCategoriesParameter>(parameterProps);

  const onChangeName = useCallback(
    (name: string) => {
      setParameter((prev) => ({ ...prev, name }));
    },
    [setParameter]
  );

  const submit = useCallback(async () => {
    onSubmit(parameter);
  }, [onSubmit, parameter]);

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
