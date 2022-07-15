import { Box, VStack } from "@web/ui/components/layouts";

const RootPage = () => {
	return (
		<VStack spacing={4} align="stretch">
      <Box h="40px" bg="yellow.200">
        1
      </Box>
      <Box h="40px" bg="tomato">
        2
      </Box>
      <Box h="40px" bg="pink.100">
        3
      </Box>
    </VStack>
	);
};

export default RootPage;
