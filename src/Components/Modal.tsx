import {
  Button,
  Center,
  Link,
  VStack,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import Backdrop from "./Backdrop";

interface Props {
  handleClose: any;
  servicesClick: () => void;
  workClick: () => void;
  aboutClick: () => void;
  contactClick: () => void;
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({
  handleClose,
  servicesClick,
  workClick,
  aboutClick,
  contactClick,
}: Props) => {
  const handleServicesClick = () => {
    handleClose();
    servicesClick();
  };
  const handleWorkClick = () => {
    handleClose();
    workClick();
  };
  const handleAboutClick = () => {
    handleClose();
    aboutClick();
  };
  const handleContactClick = () => {
    handleClose();
    contactClick();
  };

  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <>
      <Backdrop onClick={handleClose}>
        <ChakraBox
          onClick={(e) => e.stopPropagation()}
          w="200px"
          h="400px"
          display="flex"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          justifyContent="center"
        >
          <VStack
            display={{ lg: "none" }}
            fontSize="26"
            fontWeight="none"
            color="white"
            letterSpacing="2px"
          >
            <Center mb="50px">
              <Link onClick={handleServicesClick}>SERVICES</Link>
            </Center>
            <Center mb="50px">
              <Link onClick={handleWorkClick}>WORK</Link>
            </Center>
            <Center mb="50px">
              <Link onClick={handleAboutClick}>ABOUT</Link>
            </Center>
            <Center mb="50px">
              <Button
                bg="#8C52FF"
                color="white"
                fontSize="26"
                fontWeight="none"
                _hover={{ bg: "#8C52FF", transform: "scale(1.1)" }}
                onClick={handleContactClick}
              >
                CONTACT
              </Button>
            </Center>
          </VStack>
        </ChakraBox>
      </Backdrop>
    </>
  );
};

export default Modal;
