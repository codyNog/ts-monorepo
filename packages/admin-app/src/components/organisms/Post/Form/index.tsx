import { Post } from "@my/shared/entities/Post";
import {
  AutoComplete,
  Button,
  Input,
  Label,
  Switch,
  Tag,
  Text,
  TextArea,
} from "@web/ui/components";
import { Box, Form, VStack } from "@web/ui/components/layouts";
import { MarginProps } from "@web/ui/components/style";
import { usePostForm } from "~/store/components/organisms/Post/Form";

type Props = MarginProps & { post?: Post; submit: (post: Post) => void };

export const PostForm = ({
  post: postProps,
  submit,
  ...marginProps
}: Props): JSX.Element => {
  const {
    post,
    onChangeTitle,
    onChangeDescription,
    onChangePublished,
    onChangeBody,
    addCategory,
    removeCategory,
    onChangeCategoryInput,
  } = usePostForm(postProps);

  return (
    <Form {...marginProps}>
      <VStack spacing={4}>
        <Text>記事作成</Text>
        <Label htmlFor={"title"} label={"タイトル"}>
          <Input id={"title"} value={post.title} onChange={onChangeTitle} />
        </Label>
        <Label htmlFor={"description"} label={"概要"}>
          <Input
            id={"description"}
            value={post.description}
            onChange={onChangeDescription}
          />
        </Label>
        <Label htmlFor={"published"} label={"公開"}>
          <Switch
            id={"published"}
            checked={post.published}
            onChange={onChangePublished}
          />
        </Label>
        <Label htmlFor={"body"} label={"本文"}>
          <TextArea id={"body"} value={post.body} onChange={onChangeBody} />
        </Label>
        <Label htmlFor={"categories"} label={"カテゴリ"}>
          <AutoComplete
            id={"categories"}
            loadOptions={onChangeCategoryInput}
            onChange={addCategory}
          />
        </Label>
        <Box>
          {post.categories.map((elem) => (
            <Tag key={elem.uid} onClose={() => removeCategory(elem)}>
              {elem.name}
            </Tag>
          ))}
        </Box>
        <Button onClick={() => submit(post)}>送信</Button>
      </VStack>
    </Form>
  );
};
