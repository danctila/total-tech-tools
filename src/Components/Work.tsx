import { Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import test1 from "../assets/tests/Logo_new_bigText.png";
import test2 from "../assets/tests/Logo_new_text.png";
import test3 from "../assets/tests/Logo_new_text_transparent.png";
import Slideshow from "./Slideshow";

const images = [{ url: test1 }, { url: test2 }, { url: test3 }];

interface Props {
  reference: any;
}

const Work = ({ reference }: Props) => {
  return (
    <VStack
      w="100%"
      h="1000px"
      bg="#19181B"
      ref={reference}
      scrollMarginTop="80px"
    >
      <VStack pt="40px" pb="100px">
        <Text fontSize="50px" color="white">
          Our Work
        </Text>
        <Divider
          orientation="horizontal"
          borderColor="#8C52FF"
          w="150px"
          h="1px"
        />
      </VStack>

      <Slideshow images={images} />
      <HStack
        justifyContent="space-between"
        w={{ base: "320px", sm: "480px", md: "700px", lg: "900px" }}
      >
        <Text color="white" fontWeight="bold" fontSize={{ base: "24px" }}>
          Business One
        </Text>
        <Button
          borderRadius="8px"
          border="1px"
          borderColor="#D8D6DC"
          fontWeight="none"
          _hover={{ bg: "#8C52FF" }}
          color="white"
          w={{ base: "120px", sm: "170px" }}
          bg="#19181B"
          mt="10px"
        >
          LIVE DEMO
        </Button>
      </HStack>
    </VStack>
  );
};

export default Work;
