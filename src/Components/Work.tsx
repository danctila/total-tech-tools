import { Divider, HStack, Text, VStack } from "@chakra-ui/react";
import landscape1 from "../assets/landscape/landscape_1.webp";
import landscape2 from "../assets/landscape/landscape_2.webp";
import landscape3 from "../assets/landscape/landscape_3.webp";
import landscape4 from "../assets/landscape/landscape_4.webp";
import barber1 from "../assets/barber/barber1.webp";
import barber2 from "../assets/barber/barber2.webp";
import barber3 from "../assets/barber/barber3.webp";
import barber4 from "../assets/barber/barber4.webp";

import Slideshow from "./Slideshow";

const landscapeImages = [
  { url: landscape1 },
  { url: landscape2 },
  { url: landscape3 },
  { url: landscape4 },
];

const barberImages = [
  { url: barber1 },
  { url: barber2 },
  { url: barber3 },
  { url: barber4 },
];

interface Props {
  reference: any;
}

const Work = ({ reference }: Props) => {
  return (
    <VStack
      w="100%"
      h={{ base: "900px", sm: "1050px", md: "1300px", lg: "1500px" }}
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

      <Slideshow images={landscapeImages} />
      <HStack
        justifyContent="space-between"
        w={{ base: "320px", sm: "480px", md: "700px", lg: "900px" }}
        mb="100px"
      >
        <Text color="white" fontWeight="bold" fontSize={{ base: "24px" }}>
          The Landscaper
        </Text>
      </HStack>

      <Slideshow images={barberImages} />
      <HStack
        justifyContent="space-between"
        w={{ base: "320px", sm: "480px", md: "700px", lg: "900px" }}
      >
        <Text color="white" fontWeight="bold" fontSize={{ base: "24px" }}>
          The Barbershop
        </Text>
        {/* <Button
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
        </Button> */}
      </HStack>
    </VStack>
  );
};

export default Work;
