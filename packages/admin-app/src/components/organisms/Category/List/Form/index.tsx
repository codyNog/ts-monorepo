import { Form, VStack } from "@web/ui/components/layouts";
import { GetCategoriesParameter } from "@my/shared/front/repositories/Category/types";
import { Button, Input, Label } from "@web/ui/components";
import { MarginProps } from "@web/ui/components/style";
import { useCategoryListForm } from "~/store/components/organisms/Category/List/Form";

type Props = MarginProps & {
	parameter: GetCategoriesParameter;
	submit: (parameter: GetCategoriesParameter) => void;
};

export const CategoryListForm = ({
	parameter: parameterProps,
	submit,
	...marginProps
}: Props) => {
	const { register, handleSubmit } = useCategoryListForm(parameterProps);

	return (
		<Form {...marginProps}>
			<VStack>
				<Label htmlFor={"name"} label={"名前"}>
					<Input {...register("name")} />
				</Label>
				<Button onClick={handleSubmit((data) => submit(data))}>送信</Button>
			</VStack>
		</Form>
	);
};
