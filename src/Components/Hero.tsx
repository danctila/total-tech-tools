import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import Logo from "../assets/Logo_Two-_transparent_ (1).webp";
import Tilt from "react-parallax-tilt";
import ReactTypingEffect from "react-typing-effect";

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
          <Tilt perspective={500} scale={1.02} trackOnWindow={true}>
            <Image
              src={Logo}
              boxSize={{ base: "220px", sm: "230", md: "280", lg: "300" }}
            ></Image>
          </Tilt>
          <Text
            fontSize={{ base: "25", md: "28", sm: "32" }}
            color="white"
            align="center"
          >
            CRAFTING WEBSITES THAT EMPOWER BUSINESSES
          </Text>
        </VStack>
      </Box>
      <Center
        h="80px"
        w="100%"
        bg="#19181B"
        color="white"
        fontSize={{ base: "30px", sm: "40px", md: "50px" }}
      >
        <ReactTypingEffect
          text={["Web solutions", "Modern development"]}
          speed={150}
          eraseSpeed={150}
          typingDelay={1000}
          eraseDelay={1000}
        />
      </Center>
      <Box h="3000px" w="100%" bg="purple"></Box>
    </>
  );
};

export default Hero;
