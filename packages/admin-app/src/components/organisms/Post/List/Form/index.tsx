import { useCallback, useState } from "react";
import { Form, VStack } from "@web/ui/components/layouts";
import { backend } from "@my/shared/front/backend";
import { GetPostsParameter } from "@my/shared/front/repositories/Post/types";
import { AutoComplete, Label, Input, Button } from "@web/ui/components";
import { initialState } from "~/constants/state";
import { MarginProps } from "@web/ui/components/style";

type FormProps =
	& MarginProps
	& {
		parameter: GetPostsParameter;
		submit: (parameter: GetPostsParameter) => void;
	};

export const PostListForm = (
	{ parameter: parameterProps, submit: onSubmit, ...marginProps }: FormProps,
) => {
	const [parameter, setParameter] = useState<GetPostsParameter>({
		...initialState.getPostsParameter,
		...parameterProps,
	});

	const onChangeTitle = useCallback(
		(title: string) => {
			setParameter((prev: GetPostsParameter) => ({ ...prev, title }));
		},
		[setParameter],
	);

	const onChangeAuthorId = useCallback(
		(authorId: string) => {
			console.log("auth");
			setParameter((prev: GetPostsParameter) => ({ ...prev, authorId }));
		},
		[setParameter],
	);

	const loadOptions = useCallback(
		async (name: string) => {
			const users = await backend.user.getMany({ name });

			return users.map(
				(elem) => ({ ...elem, value: elem.uid, label: elem.name }),
			);
		},
		[],
	);

	const submit = useCallback(
		async () => {
			onSubmit(parameter);
		},
		[parameter],
	);

	const clear = useCallback(
		() => {
			onSubmit({ ...initialState.getPostsParameter });
			setParameter(initialState.getPostsParameter);
		},
		[],
	);

	return (
		<Form {...marginProps}>
      <VStack spacing={4}>
        <Label htmlFor={"title"} label={"タイトル"}>
          <Input
            id={"title"}
            value={parameter.title || ""}
            onChange={onChangeTitle}
          />
        </Label>
        <Label htmlFor={"authorId"} label={"著者"}>
          <AutoComplete
            id={"authorId"}
            loadOptions={loadOptions}
            onChange={(user) => onChangeAuthorId(user.uid)}
          />
        </Label>
        <Button onClick={submit}>送信</Button>
        <Button onClick={clear}>クリア</Button>
      </VStack>
    </Form>
	);
};
