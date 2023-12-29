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

const Modal = ({ handleClose }: Props) => {
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
              <Link>SERVICES</Link>
            </Center>
            <Center mb="50px">
              <Link>WORK</Link>
            </Center>
            <Center mb="50px">
              <Link>ABOUT</Link>
            </Center>
            <Center mb="50px">
              <Button
                bg="#8C52FF"
                color="white"
                fontSize="26"
                fontWeight="none"
                _hover={{ bg: "#8C52FF" }}
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
