import { LoginParmeter } from "@my/shared/front/repositories/User/types";
import { useState, useCallback } from "react";

const INITIAL_VALUE: LoginParmeter = { name: "", password: "" };

export const useLoginForm = (onSubmit: (parameter: LoginParmeter) => void) => {
	const [parameter, setParameter] = useState<LoginParmeter>(INITIAL_VALUE);

	const onChangeName = useCallback(
		(name: string) => {
			setParameter((prev) => ({ ...prev, name }));
		},
		[setParameter],
	);

	const onChangePassword = useCallback(
		(password: string) => {
			setParameter((prev) => ({ ...prev, password }));
		},
		[setParameter],
	);

	const submit = useCallback(
		() => {
			onSubmit(parameter);
		},
		[onSubmit, parameter],
	);

	return { parameter, onChangeName, onChangePassword, submit };
};
