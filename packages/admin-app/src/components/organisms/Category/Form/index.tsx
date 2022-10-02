import { Form, VStack } from "@web/ui/components/layouts";
import { Category } from "@my/shared/entities/Category";
import { Button, Label } from "@web/ui/components";
import { MarginProps } from "@web/ui/components/style";
import { useCategoryForm } from "~/store/components/organisms/Category/Form";
import { Input } from "@chakra-ui/react";

type Props = MarginProps & {
  category?: Category;
  submit: (category: Category) => void;
};

export const CategoryForm = ({
  category: categoryProps,
  submit,
  ...marginProps
}: Props): JSX.Element => {
  const { register, handleSubmit } = useCategoryForm(categoryProps);

  return (
    <Form {...marginProps}>
      <VStack>
        <Label htmlFor={"name"} label={"名前"}>
          <Input
            data-testid={"name"}
            {...register("name", { required: true })}
          />
        </Label>
        <Button onClick={() => handleSubmit(submit)}>送信</Button>
      </VStack>
    </Form>
  );
};

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;
  const { render, fireEvent, waitFor } = await import("@testing-library/react");

  describe("CategoryForm", () => {
    it("初期状態", () => {
      const { getByTestId } = render(<CategoryForm submit={() => {}} />);

      expect(getByTestId("name").innerHTML).toEqual("");
    });

    it("nameに入力", () => {
      const { getByTestId } = render(<CategoryForm submit={() => {}} />);
      fireEvent.input(getByTestId("name"), {
        target: {
          value: "test",
        },
      });

      waitFor(() => expect(getByTestId("name").innerHTML).toEqual("test"));
    });
  });
}
