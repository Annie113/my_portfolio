import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  HStack,
  Link
} from "@chakra-ui/react";

export const Experience = () => {
  return (
    <>
      {/* ----------------- Studies ---------------- */}
      <Box bg="#fff" py={10}>
        <Box maxW="1200px" mx="auto" px={{ base: 7, md: 12 }}>
          <Heading
            as="h2"
            mb={10}
            borderBottom="1px"
            borderColor="gray.100"
            pb={8}
            variant="h2"
          >
            Studies
          </Heading>
        </Box>

        {/* Accordion */}
        <Box maxW="68%" mx="auto">
          <Accordion allowToggle>
            {/* Study 1 */}
            <AccordionItem border="none" mb={4}>
              <>
                <h3>
                  <AccordionButton
                    bg="customBlue.500"
                    color="white"
                    _hover={{ bg: "customBlue.700" }}
                    px={6}
                    py={4}
                    borderRadius="md"
                    justifyContent="space-between"
                  >
                    <Text fontWeight="bold">
                      Front-end Development @ WINC ACADEMY
                    </Text>
                    <Text fontWeight="medium"> 09 - 07 - 2025</Text>
                  </AccordionButton>
                </h3>
                <AccordionPanel
                  bg="#fff"
                  color="#4a5568"
                  p={6}
                  borderRadius="md"
                >
                  <Text fontSize="sm" mb={2}>
                    📍 Amsterdam, The Netherlands &nbsp;&nbsp; 🔗{" "}
                    <Link
                      href="https://credsverse.com/credentials/09dd44f6-c081-4f81-88e1-bb7308a30a20"
                      isExternal
                      color="customBlue.500"
                    >
                      CHECK OUT CERTIFICATE
                    </Link>
                  </Text>
                  <Text fontSize="sm" mb={4}>
                    This course thought me the core technologies of the web—HTML, CSS, and JavaScript—along with modern frameworks like React. 
                    I learned to build interactive websites through a mix of hands-on projects with personal guidance from experienced instructors.
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {["HTML", "CSS", "React", "JS/TS", "Vite", "JSON", "NodeJS", "Git"].map(
                      (tag) => (
                        <Box
                          key={tag}
                          px={3}
                          py={1}
                          bg="customBlue.25"
                          borderRadius="md"
                          fontSize="xs"
                          fontWeight="bold"
                        >
                          {tag}
                        </Box>
                      )
                    )}
                  </HStack>
                </AccordionPanel>
              </>
            </AccordionItem>

            {/* Study 2 */}
            <AccordionItem border="none" mb={4}>
              <>
                <h3>
                  <AccordionButton
                    bg="customBlue.500"
                    color="white"
                    _hover={{ bg: "customBlue.700" }}
                    px={6}
                    py={4}
                    borderRadius="md"
                    justifyContent="space-between"
                  >
                    <Text fontWeight="bold">
                      Bachelor in Science Nutrition and New Product Management
                    </Text>
                    <Text fontWeight="medium">2012 – 2016</Text>
                  </AccordionButton>
                </h3>
                <AccordionPanel
                  bg="#fff"
                  color="#4a5568"
                  p={6}
                  borderRadius="md"
                >
                  <Text fontSize="sm" mb={2}>
                    📍 Amsterdam, the Netherlands
                  </Text>
                  <Text fontSize="sm" mb={4}>
                    Prepares students to work in the food industry, particularly in the development and marketing of healthy, innovative food products.
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {["Food labeling", "Prototyping", "Market Research", "Consumer behavior analysis", "Food Safety", "Nutritional analysis", "Concept development"].map((tag) => (
                      <Box
                        key={tag}
                        px={3}
                        py={1}
                        bg="customBlue.25"
                        borderRadius="md"
                        fontSize="xs"
                        fontWeight="bold"
                      >
                        {tag}
                      </Box>
                    ))}
                  </HStack>
                </AccordionPanel>
              </>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>

      {/* ----------------- Experience ---------------- */}
      <Box bg="#fff" py={10}>
        <Box maxW="1200px" mx="auto" px={{ base: 7, md: 12 }}>
          <Heading
            as="h2"
            mb={10}
            borderBottom="1px"
            borderColor="gray.100"
            pb={8}
            variant="h2"
          >
            Experience
          </Heading>
        </Box>

        {/* Accordion centered separately */}
        <Box maxW="68%" mx="auto">
          <Accordion allowToggle>
            {/* Experience 1 */}
            <AccordionItem border="none" mb={4}>
              <>
                <h2>
                  <AccordionButton
                    bg="customBlue.500"
                    color="white"
                    _hover={{ bg: "customBlue.700" }}
                    px={6}
                    py={4}
                    borderRadius="md"
                    justifyContent="space-between"
                  >
                    <Text fontWeight="bold">
                      Co-Founder @ Life Coach Elevate
                    </Text>
                    <Text fontWeight="medium">2024 – Present</Text>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  bg="customBlue.700"
                  color="white"
                  p={6}
                  borderRadius="md"
                >
                  <Text fontSize="sm" mb={2}>
                    📍 Arizona, USA &nbsp;&nbsp; 🔗{" "}
                    <Link
                      href="https://lifecoachelevate.com"
                      isExternal
                      color="customBlue.50"
                      textDecor="underline"
                    >
                      lifecoachelevate.com
                    </Link>
                  </Text>
                  <Text fontSize="sm" mb={4}>
                    Co-founded Life Coach Elevate, managing end-to-end technical
                    infrastructure, server architecture, automation pipelines,
                    leading the dev & design team, and optimizing performance at
                    scale.
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {["DevOps", "CI/CD", "Kubernetes", "JS/TS", "NextJS"].map(
                      (tag) => (
                        <Box
                          key={tag}
                          px={3}
                          py={1}
                          bg="customBlue.500"
                          borderRadius="md"
                          fontSize="xs"
                        >
                          {tag}
                        </Box>
                      )
                    )}
                  </HStack>
                </AccordionPanel>
              </>
            </AccordionItem>

            {/* Experience 2 */}
            <AccordionItem border="none" mb={4}>
              <>
                <h2>
                  <AccordionButton
                    bg="customBlue.500"
                    color="white"
                    _hover={{ bg: "customBlue.700" }}
                    px={6}
                    py={4}
                    borderRadius="md"
                    justifyContent="space-between"
                  >
                    <Text fontWeight="bold">
                      Senior Lead Software Engineer @ Saimon Global Ltd
                    </Text>
                    <Text fontWeight="medium">2019 – 2024</Text>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  bg="customBlue.700"
                  color="white"
                  p={6}
                  borderRadius="md"
                >
                  <Text fontSize="sm" mb={2}>
                    📍 Remote &nbsp;&nbsp; 🔗{" "}
                    <Link
                      href="#"
                      isExternal
                      color="customBlue.50"
                      textDecor="underline"
                    >
                      saimonglobal.com
                    </Link>
                  </Text>
                  <Text fontSize="sm" mb={4}>
                    Led a full-stack team building internal tools, integrating
                    third-party APIs, and deploying scalable software in regulated
                    environments.
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {["React", "Node.js", "Docker", "CI/CD", "AWS"].map((tag) => (
                      <Box
                        key={tag}
                        px={3}
                        py={1}
                        bg="customBlue.500"
                        borderRadius="md"
                        fontSize="xs"
                      >
                        {tag}
                      </Box>
                    ))}
                  </HStack>
                </AccordionPanel>
              </>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};

export default Experience;
