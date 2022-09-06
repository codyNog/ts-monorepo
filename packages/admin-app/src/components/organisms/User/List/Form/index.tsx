import { useCallback, useState } from "react";
import { Form, VStack } from "@web/ui/components/layouts";
import { GetUsersParameter } from "@my/shared/front/repositories/User/types";
import { Button, Input, Label } from "@web/ui/components";
import { MarginProps } from "@web/ui/components/style";

type FormProps =
	& MarginProps
	& {
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
		[setParameter],
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
