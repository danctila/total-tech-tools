import { Box, Image, Text, VStack } from "@chakra-ui/react";
import Logo from "../assets/Logo_Two-_transparent_ (1).webp";

const Hero = () => {
  return (
    <>
      <Box
        h="450px"
        bg="#3E3B45"
        w="100%"
        alignItems="center"
        justifyContent="center"
        pt="80px"
        display="flex"
      >
        <VStack spacing="30px" letterSpacing="2px">
          <Image
            src={Logo}
            boxSize={{ base: "220px", sm: "230", md: "280", lg: "300" }}
          ></Image>
          <Text
            fontSize={{ base: "25", md: "28", sm: "32" }}
            color="white"
            align="center"
          >
            CRAFTING WEBSITES THAT EMPOWER BUSINESSES
          </Text>
        </VStack>
      </Box>
      <Box h="3000px" w="100%" bg="purple"></Box>
    </>
  );
};

export default Hero;
