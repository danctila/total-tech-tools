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
        h={{ base: "1600px", sm: "1400px", md: "1300px", lg: "950px" }}
        bg="#3E3B45"
        letterSpacing="1px"
        ref={reference}
        scrollMarginTop="80px"
      >
        {/* Desktop style */}
        <VStack
          spacing="50px"
          pt={{ base: "100px", lg: "150px" }}
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
              <Box w="430px" ml="25px">
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
                    fontSize="26px"
                    letterSpacing="1px"
                    fontWeight="bold"
                  >
                    Design Mock-ups
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Instead of just telling you what your website has to look
                  like, we make it your choice. Every detail of how your new
                  website will look and feel can be clearly ironed out with
                  beautiful, elegant designs of your choice.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Website Development
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Need the full package? Mock-ups, development, hosting and
                  management can all be done to give you all the power necessary
                  to take a stand in the digital world.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Managed Domains & Hosting
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  The best website is one that works consistently. Our managed
                  hosting does exactly that, keeping your website fast,
                  reliable, and secure. With top-notch maintenance and support
                  we also allow domain names to be your choice. Want
                  mybusiness.com? Done.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Redesign
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Is your website simple to navigate, attractive, and effective
                  at converting leads? This is why we use the latest technology
                  to create websites that pulls visitors in and engage them with
                  your business.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Tooling Additions
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Have a full website but feel something is missing? We have a
                  toolbox full of modern practices to help you bring on the
                  upgrades and keep your website optimal.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Mobile Responsive Development
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Even if you are a B2B business or feel that you don’t need a
                  presence in the mobile world, your audience is almost
                  guaranteed to view your website on a mobile device. Our
                  responsive web development gives you that edge over slower
                  competitors.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Support & Maintenance
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  When you contact us, we respond! We make it our priority to
                  work with and understand your needs. Our business is unique in
                  its personal communications, getting what you need finished
                  the right way.
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
          pt="150px"
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
              <Box w="430px" ml="25px">
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
                    fontSize="26px"
                    letterSpacing="1px"
                    fontWeight="bold"
                  >
                    Design Mock-ups
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Instead of just telling you what your website has to look
                  like, we make it your choice. Every detail of how your new
                  website will look and feel can be clearly ironed out with
                  beautiful, elegant designs of your choice.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Website Development
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Need the full package? Mock-ups, development, hosting and
                  management can all be done to give you all the power necessary
                  to take a stand in the digital world.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Managed Domains & Hosting
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  The best website is one that works consistently. Our managed
                  hosting does exactly that, keeping your website fast,
                  reliable, and secure. With top-notch maintenance and support
                  we also allow domain names to be your choice. Want
                  mybusiness.com? Done.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Redesign
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Is your website simple to navigate, attractive, and effective
                  at converting leads? This is why we use the latest technology
                  to create websites that pulls visitors in and engage them with
                  your business.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Tooling Additions
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Have a full website but feel something is missing? We have a
                  toolbox full of modern practices to help you bring on the
                  upgrades and keep your website optimal.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Mobile Responsive Development
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Even if you are a B2B business or feel that you don’t need a
                  presence in the mobile world, your audience is almost
                  guaranteed to view your website on a mobile device. Our
                  responsive web development gives you that edge over slower
                  competitors.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Support & Maintenance
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  When you contact us, we respond! We make it our priority to
                  work with and understand your needs. Our business is unique in
                  its personal communications, getting what you need finished
                  the right way.
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
          <HStack>
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
              <Box ml="25px">
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
                    fontSize="26px"
                    letterSpacing="1px"
                    fontWeight="bold"
                  >
                    Design Mock-ups
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Instead of just telling you what your website has to look
                  like, we make it your choice. Every detail of how your new
                  website will look and feel can be clearly ironed out with
                  beautiful, elegant designs of your choice.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Website Development
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Need the full package? Mock-ups, development, hosting and
                  management can all be done to give you all the power necessary
                  to take a stand in the digital world.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Managed Domains & Hosting
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  The best website is one that works consistently. Our managed
                  hosting does exactly that, keeping your website fast,
                  reliable, and secure. With top-notch maintenance and support
                  we also allow domain names to be your choice. Want
                  mybusiness.com? Done.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Redesign
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Is your website simple to navigate, attractive, and effective
                  at converting leads? This is why we use the latest technology
                  to create websites that pulls visitors in and engage them with
                  your business.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Tooling Additions
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Have a full website but feel something is missing? We have a
                  toolbox full of modern practices to help you bring on the
                  upgrades and keep your website optimal.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Mobile Responsive Development
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  Even if you are a B2B business or feel that you don’t need a
                  presence in the mobile world, your audience is almost
                  guaranteed to view your website on a mobile device. Our
                  responsive web development gives you that edge over slower
                  competitors.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor="#3E3B45">
                <AccordionButton>
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="26px"
                    fontWeight="bold"
                    letterSpacing="1px"
                  >
                    Support & Maintenance
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4} fontSize="18px">
                  When you contact us, we respond! We make it our priority to
                  work with and understand your needs. Our business is unique in
                  its personal communications, getting what you need finished
                  the right way.
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
