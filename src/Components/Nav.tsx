import {
  Button,
  HStack,
  IconButton,
  Link,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack
        bg="#19181B"
        h="80px"
        w="100%"
        pos="fixed"
        zIndex={200}
        justifyContent="space-between"
        px="15px"
      >
        <Text color="white" fontSize="30" fontWeight="bold" letterSpacing="4px">
          TOTAL TECH TOOLS
        </Text>
        <HStack
          display={{ base: "none", lg: "flex" }}
          fontSize="26"
          fontWeight="none"
          color="white"
          spacing="50px"
        >
          <Link>SERVICES</Link>
          <Link>WORK</Link>
          <Link>ABOUT</Link>
          <Button bg="#8C52FF" color="white" fontSize="26" fontWeight="none">
            CONTACT
          </Button>
        </HStack>
        <IconButton
          size={"lg"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ lg: "none" }}
          onClick={isOpen ? onClose : onOpen}
          color="white"
          bg="19181B"
        />
        {isOpen ? (
          <VStack display={{ lg: "none" }}>
            <Link>SERVICES</Link>
            <Link>WORK</Link>
            <Link>ABOUT</Link>
            <Button bg="#8C52FF" color="white" fontSize="26" fontWeight="none">
              CONTACT
            </Button>
          </VStack>
        ) : null}
      </HStack>
    </>
  );
};

export default Nav;
