import { Button, Divider, Text, VStack } from "@chakra-ui/react";

interface Props {
  reference: any;
}

const About = ({ reference }: Props) => {
  return (
    <VStack
      bg="#19181B"
      w="100%"
      h="800px"
      ref={reference}
      scrollMarginTop="80px"
    >
      <VStack pb="30px" pt="40px">
        <Text fontSize="50px" color="white" letterSpacing="1px">
          About Us
        </Text>
        <Divider
          orientation="horizontal"
          borderColor="#8C52FF"
          w="150px"
          h="1px"
        />
      </VStack>
      <VStack
        fontSize="22px"
        maxW="500px"
        letterSpacing="1px"
        align="left"
        px="10px"
      >
        <Text color="#D8D6DC">
          Based in Connecticut, we strive to bring power to local businesses by
          giving gateways into the digital world.
        </Text>
        <br />
        <br />
        <Text color="#D8D6DC">
          Focused on client needs and interactions, we are confident Total Tech
          Tools will bring the best experience to you.
        </Text>
        <br />
        <br />
        <Text color="#8C52FF">Have a project?</Text>
        <Button
          borderRadius="8px"
          border="1px"
          borderColor="#D8D6DC"
          fontWeight="none"
          _hover={{ bg: "#8C52FF" }}
          color="white"
          w="120px"
          bg="#19181B"
          mt="10px"
        >
          REACH OUT
        </Button>
      </VStack>
    </VStack>
  );
};

export default About;
