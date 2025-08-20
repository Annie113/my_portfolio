import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

  return (
    <Box as="footer" bg="white" mt={20}>
      {/* Top hairline */}
      <Box maxW="1200px" mx="auto" borderTop="1px solid" borderColor="gray.200" />

      {/* Main footer content */}
      <Box maxW="1200px" mx="auto" px={{ base: 7, md: 12 }} py={{ base: 10, md: 16 }}>
        <Grid
          templateColumns={{ base: "1fr", md: "1.2fr 1fr 1fr" }}
          gap={{ base: 10, md: 14 }}
          alignItems="start"
        >
          {/* Left: name + tagline */}
          <GridItem>
            <Heading
              as="h3"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              mb={3}
            >
              Annelies Mälzer
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
              A front-end developer
            </Text>
          </GridItem>

          {/* Pages */}
          <GridItem>
            <Text
              fontSize="xs"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="customRed.100"
              mb={4}
              fontWeight="bold"
            >
              Pages
            </Text>
            <Stack spacing={4} fontSize={{ base: "md", md: "lg" }}>
              <Link as={RouterLink} to="/">Home</Link>
              <Link as={RouterLink} to="/about">About</Link>
              <Link as={RouterLink} to="/experience">Experience</Link>
            </Stack>
          </GridItem>

          {/* Get in touch */}
          <GridItem>
            <Text
              fontSize="xs"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color="customRed.100"
              mb={4}
              fontWeight="bold"
            >
              Contact me
            </Text>
            <Stack spacing={4} fontSize={{ base: "md", md: "lg" }}>
              <Link href="mailto:anneliesarbouw@gmail.com">Email</Link>
              <Link href="https://www.linkedin.com/in/anneliesarbouw/" isExternal>
                LinkedIn
              </Link>
              <Link href="https://github.com/Annie113" isExternal>
                GitHub
              </Link>
            </Stack>
          </GridItem>
        </Grid>

        {/* Bottom padding for breathing room */}
        <Box h={{ base: 8, md: 10 }} />
      </Box>
    </Box>
  );
};

export default Footer;
