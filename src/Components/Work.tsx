import { Box, Text, VStack } from "@chakra-ui/react";

const Work = () => {
  return (
    <Box w="100%" h="1000px" bg="#19181B">
      <VStack>
        <Text fontSize="60px" color="white">
          OUR WORK
        </Text>
        {/* purple line here*/}
      </VStack>
      <VStack>{/*projects here*/}</VStack>
    </Box>
  );
};

export default Work;
