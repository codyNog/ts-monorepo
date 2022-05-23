import { Button, Input, Label } from "@my/shared/front/components";
import { VStack } from "@my/shared/front/components/layouts";
import { MarginProps } from "@my/shared/front/components/style";
import { LoginParmeter } from "@my/shared/front/repositories/User/types";
import { useLoginForm } from "~/store/components/LoginForm";

type Props = MarginProps & {
  onSubmit: (parameter: LoginParmeter) => void;
};

export const LoginForm = ({ onSubmit, ...marginProps }: Props): JSX.Element => {
  const { parameter, onChangeName, onChangePassword, submit } =
    useLoginForm(onSubmit);

  return (
    <VStack {...marginProps}>
      <Label label={"ユーザー名"}>
        <Input value={parameter.name} onChange={onChangeName} />
      </Label>
      <Label label={"パスワード"}>
        <Input
          value={parameter.password}
          type={"password"}
          onChange={onChangePassword}
        />
      </Label>
      <Button onClick={submit}>送信</Button>
    </VStack>
  );
};
