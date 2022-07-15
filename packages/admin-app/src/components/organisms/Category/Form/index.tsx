import { Form, VStack } from "@web/ui/components/layouts";
import { Category } from "@my/shared/entities/Category";
import { Button, Input, Label } from "@web/ui/components";
import { MarginProps } from "@web/ui/components/style";
import { useCategoryForm } from "~/store/components/organisms/Category/Form";

type Props =
	& MarginProps
	& { category?: Category; submit: (category: Category) => void };

export const CategoryForm = (
	{ category: categoryProps, submit, ...marginProps }: Props,
): JSX.Element => {
	const { category, onChangeName } = useCategoryForm(categoryProps);

	return (
		<Form {...marginProps}>
      <VStack>
        <Label htmlFor={"name"} label={"名前"}>
          <Input value={category.name} id={"name"} onChange={onChangeName} />
        </Label>
        <Button onClick={() => submit(category)}>送信</Button>
      </VStack>
    </Form>
	);
};
