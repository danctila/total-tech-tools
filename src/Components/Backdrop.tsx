import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

interface Props {
  children: any;
  onClick: any;
}

const Backdrop = ({ children, onClick }: Props) => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <ChakraBox
      pos="absolute"
      top={0}
      left={0}
      h="100%"
      w="100%"
      bg="#000000e1"
      display="flex"
      alignItems="top"
      py="250px"
      position="fixed"
      justifyContent="center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </ChakraBox>
  );
};

export default Backdrop;
