import { Box, Divider, Text, VStack } from "@chakra-ui/react";
import test1 from "../assets/tests/Logo_new_bigText.png";
import test2 from "../assets/tests/Logo_new_text.png";
import test3 from "../assets/tests/Logo_new_text_transparent.png";
import Slideshow from "./Slideshow";

const images = [{ url: test1 }, { url: test2 }, { url: test3 }];

const Work = () => {
  return (
    <Box w="100%" h="1000px" bg="#19181B">
      <VStack pt="100px" pb="100px">
        <Text fontSize="50px" color="white">
          OUR WORK
        </Text>
        <Divider
          orientation="horizontal"
          borderColor="#8C52FF"
          w="150px"
          h="1px"
        />
      </VStack>
      <Slideshow images={images} />
    </Box>
  );
};

export default Work;