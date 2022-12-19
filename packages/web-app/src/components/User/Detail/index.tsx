import { Avatar, Card } from "@web/ui/components";
import { Box, Flex } from "@web/ui/components/layouts";
import { useUserDetail } from "~/store/components/User/Detail";

type Props = { uid: string };

export const UserDetail = ({ uid }: Props): JSX.Element => {
	const { user } = useUserDetail(uid);
	const { name, profile } = user!;

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
