import { GetPostsParameter } from "@my/shared/front/repositories/Post/types";
import { useCallback, useState } from "react";
import { Button } from "@native/ui/components/atoms/Button";
import { Input } from "@native/ui/components/atoms/Input";
import { VStack } from "@native/ui/components/layouts/Stack";

type Props = {
  submit: (parameter: GetPostsParameter) => void;
};

export const PostListForm = ({ submit }: Props): JSX.Element => {
  const [parameter, setParameter] = useState<GetPostsParameter>({ title: "" });

  const onChangeTitle = useCallback(
    (title: string) => {
      setParameter((prev) => ({ ...prev, title }));
    },
    [setParameter]
  );

  return (
    <VStack space={2}>
      <Input value={parameter.title} onChangeText={onChangeTitle} />
      <Button onPress={() => submit(parameter)} />
    </VStack>
  );
};
