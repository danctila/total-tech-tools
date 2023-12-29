import { Button, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
const Nav = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
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
        <Text
          color="white"
          fontSize={{ base: "18", sm: "30" }}
          fontWeight="bold"
          letterSpacing="4px"
        >
          TOTAL TECH TOOLS
        </Text>
        <HStack
          display={{ base: "none", lg: "flex" }}
          fontSize="26"
          fontWeight="none"
          color="white"
          spacing="50px"
          letterSpacing="2px"
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
          icon={modalOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ lg: "none" }}
          onClick={() => (modalOpen ? close() : open())}
          color="white"
          bg="19181B"
        />
      </HStack>
      <AnimatePresence initial={false} mode={"wait"}>
        {modalOpen && <Modal handleClose={close} />}
      </AnimatePresence>
    </>
  );
};

export default Nav;
