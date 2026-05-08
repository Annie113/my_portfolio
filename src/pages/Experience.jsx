import React from "react";
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Stack,
  Link,
  Tag,
  TagLabel,
  Wrap,
  Container,
} from "@chakra-ui/react";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const studies = [
  {
    title: "Front-end Development @ WINC Academy",
    period: "Jul 2025",
    location: "Amsterdam, The Netherlands",
    description:
      "This course taught me the core technologies of the web — HTML, CSS, JavaScript, and React. I learned to build interactive websites through hands-on projects with personal guidance from experienced instructors.",
    skills: [
      "HTML",
      "CSS",
      "React",
      "JavaScript",
      "TypeScript",
      "Vite",
      "JSON",
      "Node.js",
      "Git",
    ],
    link: "https://credsverse.com/credentials/09dd44f6-c081-4f81-88e1-bb7308a30a20",
    linkLabel: "View Certificate",
  },
  {
    title:
      "Bachelor of Science in Nutrition and New Product Management",
    period: "2012 – 2016",
    location: "Amsterdam, The Netherlands",
    description:
      "Prepared for a career in the food industry, focusing on the development and marketing of healthy and innovative food products.",
    skills: [
      "Food Labeling",
      "Prototyping",
      "Market Research",
      "Consumer Behaviour",
      "Food Safety",
      "Nutritional Analysis",
      "Concept Development",
    ],
  },
  {
    title:
      "Certificate International English Language @ University of Cambridge",
    period: "2015",
    location: "Amsterdam, The Netherlands",
    description:
      "Certified proficiency in English, demonstrating advanced skills in listening, reading, writing, and speaking for academic and professional contexts.",
    skills: ["English Language"],
  },
  {
    title:
      "HAVO Certificates in Dutch, Biology and English @ VAVO Nova College",
    period: "2011 – 2012",
    location: "Haarlem, The Netherlands",
    description:
      "Certificates in Higher General Secondary Education.",
  },
  {
    title: "VMBO-TL Diploma @ VAVO Nova College",
    period: "2006 – 2010",
    location: "Haarlem, The Netherlands",
    description:
      "Preparatory Secondary Vocational Education.",
  },
];

const workExperience = [
  {
    title: "Web Development Training Programme @ Amsterdam Tech Academy",
    period: "Oct 2025 – Apr 2026",
    location: "Amsterdam, The Netherlands",
    description:
      "Strengthening my skills in HTML, CSS, Bootstrap, and CMS development while collaborating with colleagues on practical projects.",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Canva",
      "Photopea",
      "Team Collaboration",
    ],
  },
  {
    title:
      "Full-time Parent of 2 while studying Web Development",
    period: "2020 – 2025",
    location: "Haarlem, The Netherlands",
    description:
      "Combined parenting with studying web development, strengthening skills in planning, communication, multitasking, and problem solving.",
    skills: [
      "Time Management",
      "Planning",
      "Multitasking",
      "Problem Solving",
      "Active Listening",
    ],
  },
  {
    title: "Web Designer @ MEO",
    period: "Mar 2018 – Feb 2020",
    location: "Alkmaar, The Netherlands",
    description:
      "Worked extensively with WordPress, HTML, CSS, WooCommerce, Adobe Photoshop, and Adobe XD to create and maintain websites and design mock-ups.",
    skills: [
      "HTML",
      "CSS",
      "WordPress",
      "WooCommerce",
      "Adobe XD",
      "Adobe Photoshop",
      "WPBakery",
    ],
    link: "https://wijzijnmeo.nl/",
    linkLabel: "Visit Website",
  },
  {
    title: "Product Specialist Customer Support @ Visma",
    period: "Feb 2017 – Jul 2017",
    location: "Amsterdam, The Netherlands",
    description:
      "Supported customers by phone and email regarding AccountView software while improving communication and advisory skills.",
    skills: ["Customer Service", "AccountView"],
    link: "https://www.visma.com/",
    linkLabel: "Visit Website",
  },
  {
    title: "Quality Assurance Internship @ Ahold Delhaize",
    period: "Feb 2016 – Jun 2016",
    location: "Zaandam, The Netherlands",
    description:
      "Completed my thesis within the Quality Assurance department focusing on health labels displayed on food packaging.",
    skills: [
      "Food Labeling",
      "Customer Research",
      "Nutrition",
    ],
    link: "https://www.aholddelhaize.com/",
    linkLabel: "Visit Website",
  },
  {
    title: "Marketing Internship @ Allerhande",
    period: "Jul 2015 – Feb 2016",
    location: "Zaandam, The Netherlands",
    description:
      "Contributed to marketing research, strategy support, proofreading, and administrative tasks for Allerhande magazine.",
    skills: [
      "Marketing Research",
      "Customer Research",
      "Marketing Strategy",
      "Administration",
    ],
    link: "https://www.ah.nl/allerhande",
    linkLabel: "Visit Website",
  },
  {
    title: "Sales Assistant @ Kruidvat",
    period: "Oct 2008 – Jun 2012",
    location: "Haarlem, The Netherlands",
    description:
      "Worked part-time while studying, strengthening my sales and customer service skills.",
    skills: ["Sales", "Customer Service"],
    link: "https://www.kruidvat.nl/",
    linkLabel: "Visit Website",
  },
];

/* -------------------------------------------------------------------------- */
/*                              REUSABLE COMPONENT                            */
/* -------------------------------------------------------------------------- */

const ResumeAccordionItem = ({
  title,
  period,
  location,
  description,
  skills,
  link,
  linkLabel,
}) => {
  return (
    <AccordionItem border="none" mb={5}>
      <h3>
        <AccordionButton
          bg="customBlue.500"
          color="white"
          borderRadius="xl"
          px={6}
          py={5}
          transition="all 0.2s ease"
          _hover={{
            bg: "customBlue.700",
            transform: "translateY(-2px)",
          }}
          _expanded={{
            bg: "customBlue.700",
          }}
        >
          <Box flex="1" textAlign="left">
            <Stack
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align={{ base: "flex-start", md: "center" }}
              spacing={2}
            >
              <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                {title}
              </Text>

              <Text
                fontSize="sm"
                fontWeight="medium"
                opacity={0.9}
                whiteSpace="nowrap"
              >
                {period}
              </Text>
            </Stack>
          </Box>

          <AccordionIcon />
        </AccordionButton>
      </h3>

      <AccordionPanel
        bg="white"
        p={6}
        borderRadius="xl"
        mt={2}
        border="1px solid"
        borderColor="gray.100"
      >
        <Stack spacing={4}>
          <Text fontSize="sm" color="gray.500">
            📍 {location}
          </Text>

          <Text color="gray.700" lineHeight="tall">
            {description}
          </Text>

          {link && (
            <Link
              href={link}
              isExternal
              color="customBlue.500"
              fontWeight="semibold"
              w="fit-content"
              _hover={{
                textDecoration: "none",
                color: "customBlue.700",
              }}
            >
              {linkLabel}
            </Link>
          )}

          {skills && (
            <Wrap spacing={3}>
              {skills.map((skill) => (
                <Tag
                  key={skill}
                  size="md"
                  borderRadius="full"
                  bg="customBlue.25"
                  color="gray.700"
                  px={3}
                  py={1}
                >
                  <TagLabel>{skill}</TagLabel>
                </Tag>
              ))}
            </Wrap>
          )}
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
};

/* -------------------------------------------------------------------------- */
/*                               SECTION COMPONENT                            */
/* -------------------------------------------------------------------------- */

const ResumeSection = ({ title, data }) => {
  return (
    <Box py={12}>
      <Container maxW="1200px">
        <Heading
          as="h2"
          variant="h2"
          mb={10}
          pb={6}
          borderBottom="1px solid"
          borderColor="gray.100"
        >
          {title}
        </Heading>

        <Accordion allowToggle>
          {data.map((item) => (
            <ResumeAccordionItem
              key={item.title}
              {...item}
            />
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

/* -------------------------------------------------------------------------- */
/*                                  PAGE                                      */
/* -------------------------------------------------------------------------- */

export const Experience = () => {
  return (
    <Box bg="white">
      <ResumeSection title="Studies" data={studies} />

      <ResumeSection
        title="Work Experience"
        data={workExperience}
      />
    </Box>
  );
};

export default Experience;