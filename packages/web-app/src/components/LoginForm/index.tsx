import { Button, Input, Label } from "@web/ui/components";
import { VStack } from "@web/ui/components/layouts";
import { MarginProps } from "@web/ui/components/style";
import { LoginParmeter } from "@my/shared/front/repositories/User/types";
import { useLoginForm } from "~/store/components/LoginForm";

type Props = MarginProps & { onSubmit: (parameter: LoginParmeter) => void };

export const LoginForm = ({ onSubmit, ...marginProps }: Props): JSX.Element => {
	const { register, handleSubmit } = useLoginForm();

	return (
		<VStack {...marginProps}>
			<Label htmlFor={"name"} label={"ユーザー名"}>
				<Input {...register("name")} />
			</Label>
			<Label htmlFor={"password"} label={"パスワード"}>
				<Input {...register("password")} />
			</Label>
			<Button onClick={() => handleSubmit(onSubmit)()}>送信</Button>
		</VStack>
	);
};
