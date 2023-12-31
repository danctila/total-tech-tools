import {
  Button,
  Divider,
  HStack,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import grader1 from "../assets/grader/grader1.webp";
import grader2 from "../assets/grader/grader2.webp";
import grader3 from "../assets/grader/grader3.webp";
import grader4 from "../assets/grader/grader4.webp";
import landscape1 from "../assets/landscape/landscape_1.webp";
import landscape2 from "../assets/landscape/landscape_2.webp";
import landscape3 from "../assets/landscape/landscape_3.webp";
import landscape4 from "../assets/landscape/landscape_4.webp";
import barber1 from "../assets/barber/barber1.webp";
import barber2 from "../assets/barber/barber2.webp";
import barber3 from "../assets/barber/barber3.webp";
import barber4 from "../assets/barber/barber4.webp";

import Slideshow from "./Slideshow";
import { useState } from "react";

const graderImages = [
  { url: grader1 },
  { url: grader2 },
  { url: grader3 },
  { url: grader4 },
];

const landscapeImages = [
  { url: landscape1 },
  { url: landscape2 },
  { url: landscape3 },
  { url: landscape4 },
];

const barberImages = [
  { url: barber2 },
  { url: barber1 },
  { url: barber3 },
  { url: barber4 },
];

interface Props {
  reference: any;
}

const Work = ({ reference }: Props) => {
  const ModalOne = () => (
    <>
      <ModalHeader fontSize="24px">NHS Grade Calculator</ModalHeader>
      <ModalCloseButton _hover={{ bg: "white" }} />
      <ModalBody>
        <Link fontSize="18px" color="blue" href="http://nhsgrader.com">
          nhsgrader.com
        </Link>
        <Text fontSize="20px" letterSpacing="1px">
          This project was created for Newington High School in Newington
          Connecticut. It features a fully responsive design to accomodate for
          mobile users. The calculator application utilizes the schools grading
          system to predict final grades. Using modern functions such as
          tooltips, UI sliders, and routing, the application is fast and
          efficient while still remaining simple and elegant.
        </Text>
        <Button
          onClick={() => {
            window.open("http://nhsgrader.com", "_blank");
          }}
          borderRadius="8px"
          border="1px"
          borderColor="#19181b"
          bg="white"
          fontWeight="none"
          _hover={{ bg: "#8C52FF" }}
          my="15px"
        >
          SEE IT LIVE
        </Button>
        <VStack>
          <Image src={grader1} />
          <Image src={grader2} />
          <Image src={grader3} />
          <Image src={grader4} />
        </VStack>
      </ModalBody>
    </>
  );
  const ModalTwo = () => (
    <>
      <ModalHeader fontSize="24px">The Landscaper</ModalHeader>
      <ModalCloseButton _hover={{ bg: "white" }} />
      <ModalBody>
        <Text fontSize="20px" letterSpacing="1px">
          This fully responsive mock design is meant to fit the theme of any
          landscaping business looking to reel in customers by displaying their
          work and testimonials.
        </Text>
        <VStack>
          <Image src={landscape1} />
          <Image src={landscape2} />
          <Image src={landscape3} />
          <Image src={landscape4} />
        </VStack>
      </ModalBody>
    </>
  );

  const ModalThree = () => (
    <>
      <ModalHeader fontSize="24px">The Barbershop</ModalHeader>
      <ModalCloseButton _hover={{ bg: "white" }} />
      <ModalBody>
        <Text fontSize="20px" letterSpacing="1px">
          This design features modern aesthetic choices applicable to a barber
          shop. With a minimalistic design, this site features a menu side bar
          that can send users to different sections of page including the about
          us, services, and contact sections.
        </Text>
        <VStack>
          <Image src={barber2} />
          <Image src={barber1} />
          <Image src={barber3} />
          <Image src={barber4} />
        </VStack>
      </ModalBody>
    </>
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalBody, setModalBody] = useState(<ModalOne />);
  return (
    <VStack
      w="100%"
      h={{ base: "1370px", sm: "1650px", md: "2000px", lg: "2300px" }}
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

      <Slideshow images={graderImages} />
      <HStack
        justifyContent="space-between"
        w={{ base: "320px", sm: "480px", md: "700px", lg: "900px" }}
        mb="100px"
      >
        <Text color="white" fontWeight="bold" fontSize={{ base: "24px" }}>
          School Grade Calculator
        </Text>
        <Button
          borderRadius="8px"
          border="1px"
          borderColor="#D8D6DC"
          fontWeight="none"
          _hover={{ bg: "#8C52FF" }}
          color="white"
          w={{ base: "120px", sm: "170px" }}
          bg="#19181B"
          mt="10px"
          onClick={() => {
            setModalBody(<ModalOne />);
            onOpen();
          }}
        >
          SEE MORE
        </Button>
        <Modal
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="scale"
          scrollBehavior={"inside"}
          size="xl"
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            {modalBody}
            <ModalFooter>
              <Button
                onClick={onClose}
                _hover={{ bg: "#8C52FF" }}
                bg="white"
                border="1px"
                borderColor="#19181B"
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </HStack>

      <Slideshow images={landscapeImages} />
      <HStack
        justifyContent="space-between"
        w={{ base: "320px", sm: "480px", md: "700px", lg: "900px" }}
        mb="100px"
      >
        <Text color="white" fontWeight="bold" fontSize={{ base: "24px" }}>
          The Landscaper
        </Text>
        <Button
          borderRadius="8px"
          border="1px"
          borderColor="#D8D6DC"
          fontWeight="none"
          _hover={{ bg: "#8C52FF" }}
          color="white"
          w={{ base: "120px", sm: "170px" }}
          bg="#19181B"
          mt="10px"
          onClick={() => {
            setModalBody(<ModalTwo />);
            onOpen();
          }}
        >
          SEE MORE
        </Button>
      </HStack>

      <Slideshow images={barberImages} />
      <HStack
        justifyContent="space-between"
        w={{ base: "320px", sm: "480px", md: "700px", lg: "900px" }}
      >
        <Text color="white" fontWeight="bold" fontSize={{ base: "24px" }}>
          The Barbershop
        </Text>
        <Button
          borderRadius="8px"
          border="1px"
          borderColor="#D8D6DC"
          fontWeight="none"
          _hover={{ bg: "#8C52FF" }}
          color="white"
          w={{ base: "120px", sm: "170px" }}
          bg="#19181B"
          mt="10px"
          onClick={() => {
            setModalBody(<ModalThree />);
            onOpen();
          }}
        >
          SEE MORE
        </Button>
      </HStack>
    </VStack>
  );
};

export default Work;
