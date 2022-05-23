import { User } from "@my/shared/entities/User";
import { Avatar, Card } from "@my/shared/front/components";
import { Box, Flex } from "@my/shared/front/components/layouts";

type Props = {
  user: User;
};

export const UserDetail = ({ user }: Props): JSX.Element => {
  const { name, profile } = user;

  return (
    <Card>
      <Flex>{name}</Flex>
      {profile && (
        <Box>
          <Avatar src={profile.biography} />
        </Box>
      )}
    </Card>
  );
};
