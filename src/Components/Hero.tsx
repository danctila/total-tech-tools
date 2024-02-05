import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import Logo from "../assets/Logo_new_text_transparent.png";
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
          <Tilt perspective={300} scale={1.02} trackOnWindow={true}>
            <Image
              src={Logo}
              boxSize={{ base: "220px", sm: "230", md: "280", lg: "300" }}
            ></Image>
          </Tilt>
          <Text
            fontSize={{ base: "23", md: "24", sm: "29" }}
            color="white"
            align="center"
          >
            The agency for businesses who want to win in the digital age
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
    </>
  );
};

export default Hero;
