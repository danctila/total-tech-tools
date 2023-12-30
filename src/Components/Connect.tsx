import { VStack, Divider, Text, Box, Button } from "@chakra-ui/react";

interface Props {
  reference: any;
  contactClick: () => void;
}

const Connect = ({ reference, contactClick }: Props) => {
  return (
    <>
      <Box
        w="100%"
        h="400px"
        bg="#3E3B45"
        ref={reference}
        scrollMarginTop="80px"
      >
        <VStack pt="40px">
          <Text fontSize="50px" color="white">
            Let's Connect
          </Text>
          <Divider
            orientation="horizontal"
            borderColor="#8C52FF"
            w="150px"
            h="1px"
            mb="50px"
          />
          <Text fontSize="22px" color="#D8D6DC">
            Reach out for free today.
          </Text>
          <Button
            borderRadius="8px"
            border="1px"
            borderColor="#D8D6DC"
            fontWeight="none"
            _hover={{ bg: "#8C52FF" }}
            color="white"
            w="150px"
            bg="#19181B"
            mt="10px"
            onClick={contactClick}
          >
            INQUIRE ONLINE
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default Connect;
