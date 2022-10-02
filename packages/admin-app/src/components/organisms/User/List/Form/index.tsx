import { Form, VStack } from "@web/ui/components/layouts";
import { GetUsersParameter } from "@my/shared/front/repositories/User/types";
import { Button, Input, Label } from "@web/ui/components";
import { MarginProps } from "@web/ui/components/style";
import { useUserListForm } from "~/store/components/organisms/User/List/Form";

type FormProps =
	& MarginProps
	& {
		parameter: GetUsersParameter;
		submit: (parameter: GetUsersParameter) => void;
	};

export const UserListForm = ({
	parameter: parameterProps,
	submit,
	...marginProps
}: FormProps) => {
	const { register, handleSubmit } = useUserListForm(parameterProps);

	return (
		<Form {...marginProps}>
			<VStack>
				<Label htmlFor={"name"} label={"名前"}>
					<Input {...register("name")} />
				</Label>
				<Button onClick={handleSubmit(submit)}>送信</Button>
			</VStack>
		</Form>
	);
};
