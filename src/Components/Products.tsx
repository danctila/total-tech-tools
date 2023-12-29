import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  reference: any;
}

const Products = ({ reference }: Props) => {
  return (
    <>
      <Box
        w="100%"
        h={{ base: "1200px", lg: "850px" }}
        bg="#3E3B45"
        letterSpacing="1px"
        ref={reference}
        scrollMarginTop="80px"
      >
        {/* Desktop style */}
        <VStack
          spacing="50px"
          pt={{ base: "100px", lg: "200px" }}
          display={{ base: "none", md: "none", lg: "flex" }}
        >
          <HStack>
            <Divider
              orientation="vertical"
              borderColor="#8C52FF"
              w="1px"
              h="400px"
            />
            <VStack>
              <Box fontSize="50px" fontWeight="bold" w="450px">
                <Text color="white">Web Development & Tooling.</Text>
                <Divider
                  orientation="horizontal"
                  borderColor="#8C52FF"
                  w="150px"
                  h="1px"
                />
              </Box>
              <Box w="430px" ml="25px">
                <Text fontSize="28px" fontWeight="bold" color="#D8D6DC">
                  Personally curated, business grade applications.
                </Text>
              </Box>
              <Box w="430px" ml="50px">
                <Text fontSize="22px" color="#D8D6DC">
                  Helping businesses grow with simple, elegant, modern
                  technologies.
                </Text>
              </Box>
            </VStack>
            <Divider
              orientation="vertical"
              borderColor="#8C52FF"
              w="1px"
              h="400px"
            />
            <Accordion color="white" w="480px">
              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Design Mockups
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Website Development
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Hosting
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Tooling additions
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Domain management
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Redesign
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Divider
              orientation="vertical"
              borderColor="#8C52FF"
              w="1px"
              h="400px"
            />
          </HStack>
          <Button>VIEW PROJECTS</Button>
        </VStack>

        {/* Medium to large */}
        <VStack
          spacing="50px"
          pt="200px"
          display={{ base: "none", md: "flex", lg: "none" }}
        >
          <HStack>
            <Divider
              orientation="vertical"
              borderColor="#8C52FF"
              w="1px"
              h="400px"
            />
            <VStack>
              <Box fontSize="50px" fontWeight="bold" w="450px">
                <Text color="white">Web Development & Tooling.</Text>
                <Divider
                  orientation="horizontal"
                  borderColor="#8C52FF"
                  w="150px"
                  h="1px"
                />
              </Box>
              <Box w="430px" ml="25px">
                <Text fontSize="28px" fontWeight="bold" color="#D8D6DC">
                  Personally curated, business grade applications.
                </Text>
              </Box>
              <Box w="430px" ml="50px">
                <Text fontSize="22px" color="#D8D6DC">
                  Helping businesses grow with simple, elegant, modern
                  technologies.
                </Text>
              </Box>
            </VStack>
            <Divider
              orientation="vertical"
              borderColor="#8C52FF"
              w="1px"
              h="400px"
            />
          </HStack>
          <HStack>
            <Divider
              orientation="vertical"
              borderColor="#8C52FF"
              w="1px"
              h="400px"
            />
            <Accordion color="white" w="480px">
              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Design Mockups
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Website Development
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Hosting
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Tooling additions
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Domain management
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Redesign
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Divider
              orientation="vertical"
              borderColor="#8C52FF"
              w="1px"
              h="400px"
            />
          </HStack>

          <Button>VIEW PROJECTS</Button>
        </VStack>

        {/* Medium and lower */}
        <VStack
          spacing="50px"
          pt="200px"
          display={{ base: "flex", md: "none", lg: "none" }}
        >
          <HStack w="310px">
            <Divider
              orientation="vertical"
              borderColor="#8C52FF"
              w="1px"
              h="400px"
            />
            <VStack>
              <Box fontSize="30px" fontWeight="bold">
                <Text color="white">Web Development & Tooling.</Text>
                <Divider
                  orientation="horizontal"
                  borderColor="#8C52FF"
                  w="150px"
                  h="1px"
                />
              </Box>
              <Box ml="25px">
                <Text fontSize="18px" fontWeight="bold" color="#D8D6DC">
                  Personally curated, business grade applications.
                </Text>
              </Box>
              <Box ml="50px">
                <Text fontSize="14px" color="#D8D6DC">
                  Helping businesses grow with simple, elegant, modern
                  technologies.
                </Text>
              </Box>
            </VStack>
            <Divider
              orientation="vertical"
              borderColor="#8C52FF"
              w="1px"
              h="400px"
            />
          </HStack>
          <HStack>
            <Divider
              orientation="vertical"
              borderColor="#8C52FF"
              w="1px"
              h="400px"
            />
            <Accordion color="white">
              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Design Mockups
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Website Development
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Hosting
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Tooling additions
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Domain management
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="22px"
                    letterSpacing="1px"
                  >
                    Redesign
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Lorem ipsum
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Divider
              orientation="vertical"
              borderColor="#8C52FF"
              w="1px"
              h="400px"
            />
          </HStack>

          <Button>VIEW PROJECTS</Button>
        </VStack>
      </Box>
    </>
  );
};

export default Products;
