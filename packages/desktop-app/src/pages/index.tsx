import { Image } from "@web/ui/components";
import { Box, Center } from "@web/ui/components/layouts";
import { Link } from "~/components/Link";

export const RootPage = () => {
  return (
    <Center alignItems={"center"} h={"100%"}>
      <Center>
        <Box>
          <Image src={"/128x128.png"} />
          <Center>
            <Link href={"/posts"}>ポスト一覧</Link>
          </Center>
        </Box>
      </Center>
    </Center>
  );
};
