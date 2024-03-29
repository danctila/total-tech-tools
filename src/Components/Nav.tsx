import { Button, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

interface Props {
  servicesClick: () => void;
  workClick: () => void;
  aboutClick: () => void;
  contactClick: () => void;
}

const Nav = ({ servicesClick, workClick, aboutClick, contactClick }: Props) => {
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

        <HStack
          display={{ base: "none", lg: "flex" }}
          fontSize="26"
          fontWeight="none"
          color="white"
          spacing="50px"
          letterSpacing="2px"
        >
          <Link onClick={servicesClick}>Services</Link>
          <Link onClick={workClick}>Work</Link>
          <Link onClick={aboutClick}>About</Link>
          <Button
            bg="#8C52FF"
            color="white"
            fontSize="26"
            fontWeight="none"
            _hover={{ bg: "#8C52FF", transform: "scale(1.1)" }}
            onClick={contactClick}
          >
            Contact
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
        {modalOpen && (
          <Modal
            handleClose={close}
            servicesClick={servicesClick}
            workClick={workClick}
            aboutClick={aboutClick}
            contactClick={contactClick}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
