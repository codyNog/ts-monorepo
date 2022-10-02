import { Form, VStack } from "@web/ui/components/layouts";
import { User, UserProfile } from "@my/shared/entities/User";
import { Button, Label, Input, FileInput, Image } from "@web/ui/components";
import { MarginProps } from "@web/ui/components/style";
import { useUserForm } from "~/store/components/organisms/User/Form";

type Props = MarginProps & { user?: User; submit: (user: User) => void };

export const UserForm = ({
  user: userProps,
  submit,
  ...marginProps
}: Props): JSX.Element => {
  const { user, register, handleSubmit, onChangeBiography } =
    useUserForm(userProps);

  return (
    <Form {...marginProps}>
      <VStack spacing={4}>
        <Label htmlFor={"name"} label={"名前"}>
          <Input {...register("name")} />
        </Label>
        <FileInput<keyof UserProfile>
          id={"biography"}
          label={"ユーザー画像を選択"}
          onChange={(files) => {
            if (!files) return;
            if (!files.length) return;
            // presigned URLを取得する処理
            const filePath =
              "https://pbs.twimg.com/profile_images/1493819641516670977/JJIwkCZ4_400x400.jpg";
            onChangeBiography(filePath);
          }}
        />
        {user.profile?.biography && (
          <Image src={user.profile.biography} w={100} h={100} />
        )}
        <Button onClick={() => handleSubmit(submit)()}>送信</Button>
      </VStack>
    </Form>
  );
};
