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
      {/* ----------------------------------- Studies ---------------------------------- */}
      <Box bg="#fff" py={10} pl={{ base: 0, md: 2 }}>
        <Box maxW="1200px" 
             mx="auto"
             pl={{ base: 6, md: 12 }}
             >
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
        <Box maxW="1200px" 
             mx="auto" 
             px={{ base: 7, md: 12 }}
             >
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
                    <Text fontWeight="medium"> 09 / 07 / 2025</Text>
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
              {/* Study 3 */}
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
                      Certificate International English Language @ University of Cambridge
                    </Text>
                    <Text fontWeight="medium">2015</Text>
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
                    Certified proficiency in English, demonstrating advanced skills in listening, reading, writing, and speaking for academic and professional contexts.
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {["English Language"].map((tag) => (
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
                          {/* Study 4 */}
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
                      HAVO Certificates in Dutch, Biology and English @ VAVO Novacollege
                    </Text>
                    <Text fontWeight="medium">2011 - 2012</Text>
                  </AccordionButton>
                </h3>
                <AccordionPanel
                  bg="#fff"
                  color="#4a5568"
                  p={6}
                  borderRadius="md"
                >
                  <Text fontSize="sm" mb={2}>
                    📍 Haarlem, the Netherlands
                  </Text>
                  <Text fontSize="sm">
                    Certificates in Higher General Secondary Education.
                  </Text>
                </AccordionPanel>
              </>
            </AccordionItem>
                          {/* Study 5 */}
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
                      VMBO-TL Diploma @ VAVO Novacollege
                    </Text>
                    <Text fontWeight="medium">2006 - 2010</Text>
                  </AccordionButton>
                </h3>
                <AccordionPanel
                  bg="#fff"
                  color="#4a5568"
                  p={6}
                  borderRadius="md"
                >
                  <Text fontSize="sm" mb={2}>
                    📍 Haarlem, the Netherlands
                  </Text>
                  <Text fontSize="sm">
                    Preparatory Secondary Vocational Education.
                  </Text>
                </AccordionPanel>
              </>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>

      {/* -------------------------- Work Experience --------------------------- */}
      <Box bg="#fff" py={10} pl={{ base: 0, md: 2 }}>
        <Box maxW="1200px" 
             mx="auto"
             pl={{ base: 6, md: 12 }}
             >
          <Heading
            as="h2"
            mb={10}
            borderBottom="1px"
            borderColor="gray.100"
            pb={8}
            variant="h2"
          >
            Work Experience
          </Heading>
        </Box>

        {/* Accordion */}
        <Box maxW="1200px" 
             mx="auto" 
             px={{ base: 7, md: 12 }}
             >
          <Accordion allowToggle>
            {/* Work Experience 1 */}
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
                      Full-time Parent of 2 while studying Webdevelopment
                    </Text>
                    <Text fontWeight="medium"> 01 / 2020 - Present </Text>
                  </AccordionButton>
                </h3>
                <AccordionPanel
                  bg="#fff"
                  color="#4a5568"
                  p={6}
                  borderRadius="md"
                >
                  <Text fontSize="sm" mb={2}>
                    📍 Haarlem, The Netherlands &nbsp;&nbsp; 🔗{" "}
                  </Text>
                  <Text fontSize="sm" mb={4}>
                    Taking care of my two kids (2 and 4) while studying Webdevelopment. 
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {["Time Management", "Multitasking", "Planning and Scheduling", "Patience", "Creative problem solving", "Active listening"].map(
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

            {/* Work Experience 2 */}
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
                      Webdesigner @ MEO
                    </Text>
                    <Text fontWeight="medium"> 04 / 2018 - 01 / 2020 </Text>
                  </AccordionButton>
                </h3>
                <AccordionPanel
                  bg="#fff"
                  color="#4a5568"
                  p={6}
                  borderRadius="md"
                >
                  <Text fontSize="sm" mb={2}>
                    📍 Alkmaar, The Netherlands &nbsp;&nbsp; 🔗{" "}
                    <Link
                      href="https://wijzijnmeo.nl/"
                      isExternal
                      color="customBlue.500"
                    >
                      https://wijzijnmeo.nl/
                    </Link>
                  </Text>
                  <Text fontSize="sm" mb={4}>
                    This was my first professional role in coding. I began as an intern and later transitioned into 
                    a part-time position. During this time, I worked extensively with WordPress, CSS, HTML, and 
                    Adobe Photoshop, and also created design mock-ups using Adobe XD. 
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {["HTML", "CSS", "Wordpress", "Adobe XD", "Adobe Photoshop", "Woocommerce", "WPBakery"].map(
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


            {/* Work Experience 3 */}
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
                     Product Specialist Customer Support @ Visma
                    </Text>
                    <Text fontWeight="medium"> 04/2017 - 07/2017</Text>
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
                      href="https://www.visma.com/"
                      isExternal
                      color="customBlue.500"
                    >
                      https://www.visma.com/
                    </Link>
                  </Text>
                  <Text fontSize="sm" mb={4}>
                    Although my time here was brief, I gained valuable skills in customer communication, offering advice, and managing inquiries by phone and email about the software program Accountview.
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {["Customer Service", "Accountview"].map((tag) => (
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

            {/* Work Experience 4 */}
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
                     Quality Assurance Internship @ Ahold AH
                    </Text>
                    <Text fontWeight="medium"> 02/2016 - 06/2016</Text>
                  </AccordionButton>
                </h3>
                <AccordionPanel
                  bg="#fff"
                  color="#4a5568"
                  p={6}
                  borderRadius="md"
                >
                  <Text fontSize="sm" mb={2}>
                    📍 Zaandam, The Netherlands &nbsp;&nbsp; 🔗{" "}
                    <Link
                      href="https://www.aholddelhaize.com/"
                      isExternal
                      color="customBlue.500"
                    >
                      https://www.aholddelhaize.com/
                    </Link>
                  </Text>
                  <Text fontSize="sm" mb={4}>
                    I completed my thesis at the Quality Assurance department at Albert Heijn’s headquarters in Zaandam. My research focused on the various health labels displayed on food packaging.
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {["Food Labelling", "Costumer Research", "Het Vinkje", "Nutrition"].map((tag) => (
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

            {/* Work Experience 5 */}
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
                     Marting Internship @ Ahold AH Allerhande
                    </Text>
                    <Text fontWeight="medium"> 07/2015 - 02/2016</Text>
                  </AccordionButton>
                </h3>
                <AccordionPanel
                  bg="#fff"
                  color="#4a5568"
                  p={6}
                  borderRadius="md"
                >
                  <Text fontSize="sm" mb={2}>
                    📍 Zaandam, The Netherlands &nbsp;&nbsp; 🔗{" "}
                    <Link
                      href="https://www.ah.nl/allerhande"
                      isExternal
                      color="customBlue.500"
                    >
                      https://www.ah.nl/allerhande
                    </Link>
                  </Text>
                  <Text fontSize="sm" mb={4}>
                    During my six-month internship in the Marketing department for Allerhande magazine, I contributed to marketing research, supported the development of marketing strategies, and ensured content quality through text proofreading. I also managed a range of administrative tasks, gaining valuable insight into both creative and operational aspects of marketing.
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {["Costumer Research", "Marketing Research", "Marketing Strategies", "Administration", "Recipe Books"].map((tag) => (
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

            {/* Work Experience 6 */}
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
                     Sales Assistant @ Kruidvat
                    </Text>
                    <Text fontWeight="medium"> 10/2008 - 06/2012</Text>
                  </AccordionButton>
                </h3>
                <AccordionPanel
                  bg="#fff"
                  color="#4a5568"
                  p={6}
                  borderRadius="md"
                >
                  <Text fontSize="sm" mb={2}>
                    📍 Haarlem, The Netherlands &nbsp;&nbsp; 🔗{" "}
                    <Link
                      href="https://www.kruidvat.nl/"
                      isExternal
                      color="customBlue.500"
                    >
                      https://www.kruidvat.nl/
                    </Link>
                  </Text>
                  <Text fontSize="sm" mb={4}>
                    While studying, I worked part-time as a sales assistant at the Kruidvat drugstore, where I strengthened my skills in sales and customer service.
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {["Customer Service", "Sales"].map((tag) => (
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
    </>
  );
};

export default Experience;
