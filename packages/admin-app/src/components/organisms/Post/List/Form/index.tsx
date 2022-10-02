import { useCallback, useState } from "react";
import { Form, VStack } from "@web/ui/components/layouts";
import { GetPostsParameter } from "@my/shared/front/repositories/Post/types";
import { AutoComplete, Label, Input, Button } from "@web/ui/components";
import { MarginProps } from "@web/ui/components/style";
import { usePostListForm } from "~/store/components/organisms/Post/List/Form";

type FormProps = MarginProps & {
  parameter: GetPostsParameter;
  submit: (parameter: GetPostsParameter) => void;
};

export const PostListForm = ({
  parameter: parameterProps,
  submit,
  ...marginProps
}: FormProps) => {
  const { register, handleSubmit, onChangeAuthorId, loadOptions, clear } =
    usePostListForm(parameterProps);

  return (
    <Form {...marginProps}>
      <VStack spacing={4}>
        <Label htmlFor={"title"} label={"タイトル"}>
          <Input {...register("title")} />
        </Label>
        <Label htmlFor={"authorId"} label={"著者"}>
          <AutoComplete
            id={"authorId"}
            loadOptions={loadOptions}
            onChange={(user) => onChangeAuthorId(user.uid)}
          />
        </Label>
        <Button onClick={() => handleSubmit(submit)()}>送信</Button>
        <Button onClick={() => clear(submit)}>クリア</Button>
      </VStack>
    </Form>
  );
};
