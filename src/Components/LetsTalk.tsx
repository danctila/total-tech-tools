import { Divider, Text, VStack } from "@chakra-ui/react";

interface Props {
  reference: any;
}

const LetsTalk = ({ reference }: Props) => {
  return (
    <>
      <VStack bg="#3E3B45" ref={reference}>
        <Text fontSize="48px" color="white">
          Let's Talk
        </Text>
        <Divider
          orientation="horizontal"
          borderColor="#8C52FF"
          w="150px"
          h="1px"
        />
      </VStack>
    </>
  );
};

export default LetsTalk;
