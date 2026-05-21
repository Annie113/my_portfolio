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
    <Box pt={{ base: 12, md: 16 }} px={{ base: 1, md: 10}}>
      <Container maxW="6xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          // justify="center"
        >
          {/* ------- ME IMAGE ------- */}
          <Box flex={1}>
            <Image
              src="/images/about.png"
              alt="About us"
              objectFit="cover"
              ml={{xl: 2}}
              w="80%"
              borderRadius="xl"
              shadow="lg"
            />
          </Box>

          {/* Right Side: Text */}
          <Box flex={1}>
            <Stack spacing={{ base: 4, md: 10 }}>
              <Heading mt={{ base: 6, md: 0 }} size="xl">About Me</Heading>
              <Text fontSize="lg" color="gray.700">
                I’m Annelies, a dedicated <Text as="span" color="customRed.100" fontWeight="bold">front-end developer</Text> with a background in Nutrition and New Product Management. 
                While my earlier career gave me valuable skills in communication, and project management, I discovered that 
                my real passion lies in coding and web development.<br></br>
                <br></br>
                In 2018, I began my journey in tech with an internship that turned into a job, where I gained hands-on 
                experience working with <Text as="span" color="customRed.100" fontWeight="bold">WordPress</Text>, <Text as="span" color="customRed.100" fontWeight="bold">HTML</Text> and <Text as="span" color="customRed.100" fontWeight="bold">CSS</Text>. 
                After taking time away from my career to raise my two children, I decided to return to development with renewed focus. To refresh and expand my skills, I recently completed 
                a <Text as="span" color="customRed.100" fontWeight="bold">Front-end Development program</Text>, deepening my expertise in&nbsp;<Text as="span" color="customRed.100" fontWeight="bold">JavaScript</Text> and <Text as="span" color="customRed.100" fontWeight="bold">React</Text> — technologies I’ve come to 
                truly enjoy working with. My recent projects, including this portfolio site, were all coded by me in Visual Studio Code, reflecting both my technical ability and eye for detail. <br></br>
                <br></br>
                Over the past six months, I have participated in a <Text as="span" color="customRed.100" fontWeight="bold">Web Development Training Program </Text>to support my return to the 
                workforce. During this program, I gained hands-on experience working with a <Text as="span" color="customRed.100" fontWeight="bold">CMS</Text> similar to WordPress and further strengthened my skills in HTML, CSS, JavaScript, and&nbsp;
                <Text as="span" color="customRed.100" fontWeight="bold">Bootstrap.</Text><br></br>
                <br></br>
                I’m now seeking a <Text as="span" color="customRed.100" fontWeight="bold">junior front-end development </Text>
                position where I can contribute my skills, continue to grow, and create engaging, user-friendly digital 
                experiences.
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutPage;
