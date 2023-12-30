import { HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import logo from "../assets/Logo_new_text_transparent.png";

const Footer = () => {
  return (
    <>
      {/* large */}
      <HStack
        bg="#19181B"
        w="100%"
        h="180px"
        px="20px"
        justify="center"
        justifyContent="space-between"
        display={{ base: "none", lg: "flex" }}
      >
        <Image src={logo} boxSize="100px" />
        <HStack
          fontWeight="bold"
          letterSpacing="4px"
          spacing="0"
          justify="center"
        >
          <Text color="#9b69f1" fontSize={{ base: "18", sm: "30" }}>
            T
          </Text>
          <Text color="white" fontSize={{ base: "18", sm: "30" }}>
            OTAL{" "}
          </Text>
          <Text color="#9b69f1" fontSize={{ base: "18", sm: "30" }}>
            T
          </Text>
          <Text color="white" fontSize={{ base: "18", sm: "30" }}>
            ECH{" "}
          </Text>
          <Text color="#8C52FF" fontSize={{ base: "18", sm: "30" }}>
            T
          </Text>
          <Text color="white" fontSize={{ base: "18", sm: "30" }}>
            OOLS
          </Text>
        </HStack>

        <Link
          color="#D8D6DC"
          fontWeight="none"
          fontSize="18px"
          ml="-125px"
          onClick={() =>
            (window.location.href = "mailto:totaltechtool@gmail.com")
          }
        >
          totaltechtool@gmail.com
        </Link>
      </HStack>

      {/* >large */}
      <VStack
        bg="#19181B"
        w="100%"
        h="240px"
        py="20px"
        justifyContent="space-between"
        display={{ base: "flex", lg: "none" }}
      >
        <Image src={logo} boxSize="100px" />
        <HStack fontWeight="bold" letterSpacing="4px" spacing="0">
          <Text color="#9b69f1" fontSize={{ base: "18", sm: "30" }}>
            T
          </Text>
          <Text color="white" fontSize={{ base: "18", sm: "30" }}>
            OTAL{" "}
          </Text>
          <Text color="#9b69f1" fontSize={{ base: "18", sm: "30" }}>
            T
          </Text>
          <Text color="white" fontSize={{ base: "18", sm: "30" }}>
            ECH{" "}
          </Text>
          <Text color="#8C52FF" fontSize={{ base: "18", sm: "30" }}>
            T
          </Text>
          <Text color="white" fontSize={{ base: "18", sm: "30" }}>
            OOLS
          </Text>
        </HStack>

        <Link
          color="#D8D6DC"
          fontWeight="none"
          fontSize="18px"
          onClick={() =>
            (window.location.href = "mailto:totaltechtool@gmail.com")
          }
        >
          totaltechtool@gmail.com
        </Link>
      </VStack>
    </>
  );
};

export default Footer;
