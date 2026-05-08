import React, { useMemo, useState, useCallback } from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Container,
  SimpleGrid,
  Icon,
  useToast,
  InputGroup,
  InputLeftElement,
  Divider,
  Link,
} from '@chakra-ui/react';

import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdPerson,
  MdSubject,
} from 'react-icons/md';

const CONTACT_EMAIL = 'anneliesarbouw@gmail.com';
const CONTACT_PHONE = '+31 6 25331712';
const CONTACT_ADDRESS = 'Haarlem, The Netherlands';

const ACCENT_COLOR = 'blue.400';

const encode = (value = '') =>
  encodeURIComponent(value).replace(/%20/g, '+');

const ContactItem = ({ icon, children }) => (
  <Stack direction="row" align="center" role="group">
    <Icon
      as={icon}
      boxSize={6}
      color={ACCENT_COLOR}
      transition="transform 0.2s ease-in-out"
      _groupHover={{ transform: 'translateX(6px)' }}
      aria-hidden="true"
    />
    <Text>{children}</Text>
  </Stack>
);

const ContactPage = () => {
  const toast = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [touched, setTouched] = useState({});

  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });

  const errors = useMemo(() => {
    const e = {};

    if (!values.name.trim()) {
      e.name = 'Please enter your name';
    }

    if (!values.email.trim()) {
      e.email = 'Please enter your email';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      e.email = 'Please enter a valid email';
    }

    if (!values.message.trim()) {
      e.message = 'Please write a short message';
    }

    return e;
  }, [values]);

  const onChange = useCallback(
    (key) => (ev) => {
      setValues((prev) => ({
        ...prev,
        [key]: ev.target.value,
      }));
    },
    []
  );

  const onBlur = useCallback(
    (key) => () => {
      setTouched((prev) => ({
        ...prev,
        [key]: true,
      }));
    },
    []
  );

  const hasError = (key) => touched[key] && errors[key];

  const resetForm = () => {
    setValues({
      name: '',
      email: '',
      subject: '',
      message: '',
      website: '',
    });

    setTouched({});
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    // Honeypot spam protection
    if (Object.keys(errors).length > 0 || values.website) {
      return;
    }

    setIsSubmitting(true);

    const cleanedValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    };

    const subject = cleanedValues.subject
      ? cleanedValues.subject
      : `New message from ${cleanedValues.name}`;

    const bodyLines = [
      `Name: ${cleanedValues.name}`,
      `Email: ${cleanedValues.email}`,
      '',
      cleanedValues.message,
    ];

    const href = `mailto:${CONTACT_EMAIL}?subject=${encode(
      subject
    )}&body=${encode(bodyLines.join('\n'))}`;

    toast({
      title: 'Opening your email app',
      description: `Composing message to ${CONTACT_EMAIL}`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    setTimeout(() => {
      window.open(href);

      resetForm();

      setIsSubmitting(false);
    }, 300);
  };

  return (
    <Box
      minH="100vh"
      py={{ base: 12, md: 16 }}
      bgGradient="linear(to-b, gray.50, gray.100)"
    >
      <Container maxW="6xl">
        {/* Header */}
        <Stack
          spacing={6}
          textAlign="center"
          mb={{ base: 8, md: 12 }}
        >
          <Heading size="2xl">Contact Me</Heading>

          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color="gray.600"
            maxW="2xl"
            mx="auto"
          >
            I’d love to hear from you. Reach out with
            questions, opportunities, or just to say hi!
          </Text>
        </Stack>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
        >
          {/* Contact Form */}
          <Box
            as="form"
            onSubmit={handleSubmit}
            bg="white"
            p={{ base: 6, md: 8 }}
            rounded="2xl"
            boxShadow="xl"
            borderWidth="1px"
          >
            <Stack spacing={5}>
              {/* Honeypot */}
              <Box
                position="absolute"
                left="-5000px"
                aria-hidden="true"
              >
                <Input
                  tabIndex={-1}
                  value={values.website}
                  onChange={onChange('website')}
                  placeholder="Leave empty"
                />
              </Box>

              {/* Name */}
              <FormControl
                isRequired
                isInvalid={!!hasError('name')}
              >
                <FormLabel>Name</FormLabel>

                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={MdPerson} />
                  </InputLeftElement>

                  <Input
                    value={values.name}
                    onChange={onChange('name')}
                    onBlur={onBlur('name')}
                    placeholder="Your full name"
                    autoComplete="name"
                    focusBorderColor={ACCENT_COLOR}
                  />
                </InputGroup>

                <FormErrorMessage>
                  {errors.name}
                </FormErrorMessage>
              </FormControl>

              {/* Email */}
              <FormControl
                isRequired
                isInvalid={!!hasError('email')}
              >
                <FormLabel>Email</FormLabel>

                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={MdEmail} />
                  </InputLeftElement>

                  <Input
                    type="email"
                    value={values.email}
                    onChange={onChange('email')}
                    onBlur={onBlur('email')}
                    placeholder="you@example.com"
                    autoComplete="email"
                    focusBorderColor={ACCENT_COLOR}
                  />
                </InputGroup>

                <FormErrorMessage>
                  {errors.email}
                </FormErrorMessage>
              </FormControl>

              {/* Subject */}
              <FormControl>
                <FormLabel>Subject</FormLabel>

                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={MdSubject} />
                  </InputLeftElement>

                  <Input
                    value={values.subject}
                    onChange={onChange('subject')}
                    placeholder="What’s this about?"
                    focusBorderColor={ACCENT_COLOR}
                  />
                </InputGroup>
              </FormControl>

              {/* Message */}
              <FormControl
                isRequired
                isInvalid={!!hasError('message')}
              >
                <FormLabel>Message</FormLabel>

                <Textarea
                  rows={6}
                  value={values.message}
                  onChange={onChange('message')}
                  onBlur={onBlur('message')}
                  placeholder="Write your message here..."
                  focusBorderColor={ACCENT_COLOR}
                  resize="vertical"
                />

                <FormErrorMessage>
                  {errors.message}
                </FormErrorMessage>
              </FormControl>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                isLoading={isSubmitting}
                loadingText="Sending"
                bg="black"
                color="white"
                _hover={{
                  bg: ACCENT_COLOR,
                }}
                transition="0.2s ease"
              >
                Send Message
              </Button>
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box p={{ base: 0, lg: 2 }}>
            <Stack
              spacing={6}
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.700"
            >
              <ContactItem icon={MdLocationOn}>
                {CONTACT_ADDRESS}
              </ContactItem>

              <ContactItem icon={MdPhone}>
                <Link
                  href={`tel:${CONTACT_PHONE.replace(
                    /\s+/g,
                    ''
                  )}`}
                >
                  {CONTACT_PHONE}
                </Link>
              </ContactItem>

              <ContactItem icon={MdEmail}>
                <Link href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </Link>
              </ContactItem>

              <Divider />

              {/* Socials */}
              <Box>
                <Heading as="h3" size="md" mb={3}>
                  Also find me on
                </Heading>

                <Stack
                  direction={{
                    base: 'column',
                    md: 'row',
                  }}
                  spacing={4}
                >
                  <Link
                    href="https://www.linkedin.com/in/anneliesarbouw/"
                    isExternal
                    color={ACCENT_COLOR}
                  >
                    LinkedIn
                  </Link>

                  <Link
                    href="https://github.com/Annie113"
                    isExternal
                    color={ACCENT_COLOR}
                  >
                    GitHub
                  </Link>

                  <Link
                    href={`mailto:${CONTACT_EMAIL}`}
                    color={ACCENT_COLOR}
                  >
                    Email
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContactPage;