import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  HStack,
  Link,
  Image,
  IconButton,
  Tooltip,
  SimpleGrid,
  Stack,
  AspectRatio,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

export const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        bg="white"
      >
        {/* Left Side: Text */}
        <Flex
          flex={1}
          p={{ base: 14 }}
          pb={{ "2xl": 0 }}
          align="center"
          direction="column"
        >
          <VStack
            align="flex-start"
            spacing={5}
            borderBottom="1px"
            borderColor="gray.100"
          >
            <Text fontSize="sm" color="customRed.100" fontWeight="bold">
              HELLO!
            </Text>
            <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
              I'm Annelies{" "}
              <Text as="span" color="customBlue.100">
                <br />
                A Front-end Developer
              </Text>
            </Heading>
            <Text fontSize="md" color="gray.600">
              I currently finished my{" "}
              <Text as="span" color="customRed.100" fontWeight="bold">
                front-end developer certificate
              </Text>
              , and I am very excited to start a new opportunity.
            </Text>
            <Link
              href="/CV-Annelies.pdf"
              download
              fontWeight="bold"
              fontSize="sm"
              mt={11}
              color="customBlue.100"
              textTransform="uppercase"
              pb={8}
            >
              <HStack spacing={2}>
                <FaDownload />
                <Text>Download CV</Text>
              </HStack>
            </Link>
          </VStack>
        </Flex>

        {/* Right Side: Image */}
        <Flex flex={1} position="relative" align="center" justify="center">
          <Image
            src="/images/me.jpg"
            alt="Annelies Mälzer"
            objectFit="cover"
            w="70%"
            h="73%"
          />

          {/* Bottom bar with LinkedIn & GitHub icons */}
          <HStack
            spacing={0.2}
            p={3}
            bg="white"
            position="absolute"
            right={{ base: 0, md: 12 }}
            bottom={{ base: 0, md: 16, "2xl": 21 }}
            w="90%"
            justify="space-between"
            borderTop="1px solid"
            borderColor="gray.100"
          >
            <Text fontWeight="bold" color="customBlue.100" fontSize="sm">
              CHECK OUT MY SOCIALS
            </Text>

            <HStack spacing={1}>
              <Tooltip label="LinkedIn" hasArrow>
                <Link
                  href="https://www.linkedin.com/in/anneliesarbouw/"
                  isExternal
                >
                  <IconButton
                    icon={<FaLinkedin />}
                    aria-label="LinkedIn"
                    variant="ghost"
                    size="lg"
                    fontSize="2xl"
                    _hover={{
                      bg: "transparent",
                      color: "customBlue.500",
                    }}
                  />
                </Link>
              </Tooltip>

              <Tooltip label="GitHub" hasArrow>
                <Link href="https://github.com/Annie113" isExternal>
                  <IconButton
                    icon={<FaGithub />}
                    aria-label="GitHub"
                    variant="ghost"
                    pr={{ base: 15.5, lg: 2, xl: 6 }}
                    size="lg"
                    fontSize="2xl"
                    _hover={{
                      bg: "transparent",
                      color: "customBlue.500",
                    }}
                  />
                </Link>
              </Tooltip>
            </HStack>
          </HStack>
        </Flex>
      </Flex>

      {/* About Me Section */}
      <Box
        maxW="1200px"
        mx="auto"
        // px={{ base: 7, md: 12 }}
        textAlign="center"
      >
        
        <Text
          maxW="90%"
          mx="auto"
          bg="customBlue.25"
          borderRadius={10}
          py={{ base: 12, md: 10 }}
          px={{ base: 6, md: 12 }}
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
          fontWeight="550"
          color="gray.800"
          my={10}
          lineHeight="1.8"
        >
          "I'm a perfectionistic and ambitious person with a strong drive for quality and results.<br></br> 
          My creativity and analytical mindset allow me to approach challenges from multiple angles.<br></br>
          My empathy helps me understand and connect with others on a deeper level." <br></br>
        </Text>
      </Box>

      {/* --------------------------------- Projects -------------------------------- */}
      <Box bg="#fff" py={10}>
        <Box maxW="1200px" mx="auto" px={{ base: 7, md: 12 }}>
          <Heading
            as="h2"
            fontWeight="bold"
            mb={10}
            borderBottom="1px"
            borderColor="gray.100"
            pb={8}
            variant="h2"
          >
            Projects
          </Heading>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={8}
            py={{ base: 2, md: 6 }}
          >
            {/* Block 1 */}
            <Stack spacing={4}>
              <Link href="https://my-recipe-grid.netlify.app/" isExternal>
                <AspectRatio ratio={16 / 6} w="90%">
                  <Image
                    src="/images/my-recipe-page.jpeg"
                    alt="My Recipe App Screenshot"
                    cursor="pointer"
                    borderRadius="md"
                    objectFit="cover"
                    _hover={{
                      transform: "scale(1.02)",
                      transition: "0.2s ease-in-out",
                    }}
                  />
                </AspectRatio>
              </Link>
              <Text fontWeight="bold">My Recipe App</Text>
              <Text>
                A basic recipe app built with a given dataset, JavaScript, React
                Vite and Chakra UI. This was my first ever React app for my Winc
                Academy studies.
              </Text>
            </Stack>

            {/* Block 2 */}
            <Stack spacing={4}>
              <Link href="https://wildlotus.netlify.app/" isExternal>
                <AspectRatio ratio={16 / 6} w="90%">
                  <Image
                    src="/images/wildlotuslogo.png"
                    alt="Wildlotus logo"
                    cursor="pointer"
                    borderRadius="md"
                    objectFit="cover"
                    _hover={{
                      transform: "scale(1.02)",
                      transition: "0.2s ease-in-out",
                    }}
                  />
                </AspectRatio>
              </Link>
              <Text fontWeight="bold">Wildlotus</Text>
              <Text>
                An advanced yoga events app built with a JSON server, JavaScript,
                React Vite, React Router and Chakra UI. Also part of my Winc
                Academy studies.
              </Text>
            </Stack>

            {/* Block 3 */}
            <Stack spacing={4}>
              <Link href="https://optimamed.netlify.app/" isExternal>
                <AspectRatio ratio={16 / 6} w="90%">
                  <Image
                    src="/images/optimamed-logo.png"
                    alt="Optimamed logo"
                    cursor="pointer"
                    borderRadius="md"
                    objectFit="contain"
                    _hover={{
                      transform: "scale(1.02)",
                      transition: "0.2s ease-in-out",
                    }}
                  />
                </AspectRatio>
              </Link>
              <Text fontWeight="bold">Optimamed</Text>
              <Text>
                A medical homepage made with CSS Grid, Flexbox, and custom CSS
                variables.
              </Text>
            </Stack>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};
