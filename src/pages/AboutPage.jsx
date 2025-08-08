import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  Container,
} from '@chakra-ui/react';

const AboutPage = () => {
  return (
    <Box bg="gray.50" py={16}>
      <Container maxW="6xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="center"
          gap={12}
        >
          {/* Left Side: Image */}
          <Box flex={1}>
            <Image
              src="https://github.com/Annie113/winc_react_advanced/blob/main/public/images/aboutus.jpg?raw=true"
              alt="About us"
              objectFit="cover"
              w="100%"
              borderRadius="xl"
              shadow="lg"
            />
          </Box>

          {/* Right Side: Text */}
          <Box flex={1}>
            <Stack spacing={6}>
              <Heading size="xl">About Wild Lotus</Heading>
              <Text fontSize="lg" color="gray.700">
                At Wild Lotus, we believe in more than just yoga. We provide a space for personal growth,
                relaxation, and community connection. Whether you're a beginner or advanced practitioner,
                we welcome you to breathe, stretch, and thrive with us.
              </Text>
              <Text fontSize="lg" color="gray.700">
                Our mission is to help you reconnect with your body and mind through mindful movement,
                holistic practices, and a warm, inclusive environment.
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutPage;
