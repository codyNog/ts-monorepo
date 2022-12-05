import { backend } from "@my/shared/front/backend";
import { GetPostsParameter } from "@my/shared/front/repositories/Post/types";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { initialState } from "~/constants/state";

export const usePostListForm = (parameterProps: GetPostsParameter) => {
	const { register, watch, handleSubmit, setValue, reset } =
		useForm<GetPostsParameter>({
			defaultValues: parameterProps,
		});

	const parameter = watch();

	const onChangeAuthorId = useCallback(
		(authorId: string) => {
			setValue("authorId", authorId);
		},
		[setValue],
	);

	const loadOptions = useCallback(async (name: string) => {
		const users = await backend.user.getMany({ name });

		return users.map((elem) => ({
			...elem,
			value: elem.uid,
			label: elem.name,
		}));
	}, []);

	const clear = useCallback(
		(onSubmit: (parameter: GetPostsParameter) => void) => {
			onSubmit({ ...initialState.getPostsParameter });
			reset(initialState.getPostsParameter);
		},
		[],
	);

	return {
		parameter,
		register,
		handleSubmit,
		onChangeAuthorId,
		loadOptions,
		clear,
	};
};
