import React, { useMemo, useState } from 'react';
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
import { MdEmail, MdPhone, MdLocationOn, MdPerson, MdSubject } from 'react-icons/md';

/**
 * ContactPage.jsx — Chakra UI
 *
 * ✅ No extra libraries required
 * ✅ Accessible labels + basic client-side validation
 * ✅ Works out-of-the-box using `mailto:` (opens user's email app)
 * 🔧 To send emails from your site without opening the user's email app,
 *     swap the handleSubmit implementation for your backend/form provider.
 */

const CONTACT_EMAIL = 'anneliesarbouw@gmail.com'; 
const CONTACT_PHONE = '+31 6 25331712'; 
const CONTACT_ADDRESS = 'Haarlem, The Netherlands'; 

const encode = (value = '') => encodeURIComponent(value).replace(/%20/g, '+');

const ContactPage = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({});
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '', website: '' /* honeypot */ });

  const errors = useMemo(() => {
    const e = {};
    if (!values.name.trim()) e.name = 'Please enter your name';
    if (!values.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Please enter a valid email';
    if (!values.message.trim()) e.message = 'Please write a short message';
    return e;
  }, [values]);

  const onChange = (key) => (ev) => setValues((s) => ({ ...s, [key]: ev.target.value }));

  const onBlur = (key) => () => setTouched((s) => ({ ...s, [key]: true }));

  const hasError = (key) => touched[key] && errors[key];

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(errors).length > 0 || values.website) return; // website is a honeypot

    setIsSubmitting(true);
    // Simple mailto: flow — opens the visitor's default email app prefilled.
    const subject = values.subject ? values.subject : `New message from ${values.name}`;
    const bodyLines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      '',
      values.message,
    ];
    const href = `mailto:${CONTACT_EMAIL}?subject=${encode(subject)}&body=${encode(bodyLines.join('\n'))}`;

    // Using a small timeout to allow the toast to render before navigation
    toast({
      title: 'Opening your email app…',
      description: `Composing message to ${CONTACT_EMAIL}`,
      status: 'success',
      duration: 2500,
    });

    setTimeout(() => {
      window.location.href = href;
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <Box minH="100vh" py={{ base: 12, md: 16 }} bgGradient="linear(to-b, gray.50, white)">
      <Container maxW="6xl">
        <Stack spacing={6} textAlign="center" mb={{ base: 8, md: 12 }}>
          <Heading size="2xl">Contact Me</Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
            I’d love to hear from you. Reach out with questions, opportunities, or just to say hi!
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }}>
          {/* Contact Form */}
          <Box as="form" onSubmit={handleSubmit} bg="white" p={{ base: 6, md: 8 }} rounded="2xl" boxShadow="xl" borderWidth="1px">
            <Stack spacing={5}>
              {/* Honeypot field (hidden) */}
              <Box position="absolute" left="-5000px" aria-hidden="true">
                <Input tabIndex={-1} value={values.website} onChange={onChange('website')} placeholder="Leave this field empty" />
              </Box>

              <FormControl isRequired isInvalid={!!hasError('name')}>
                <FormLabel>Name</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={MdPerson} />
                  </InputLeftElement>
                  <Input value={values.name} onChange={onChange('name')} onBlur={onBlur('name')} placeholder="Your full name" focusBorderColor="teal.400" />
                </InputGroup>
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!!hasError('email')}>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={MdEmail} />
                  </InputLeftElement>
                  <Input type="email" value={values.email} onChange={onChange('email')} onBlur={onBlur('email')} placeholder="you@example.com" focusBorderColor="teal.400" />
                </InputGroup>
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>Subject</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={MdSubject} />
                  </InputLeftElement>
                  <Input value={values.subject} onChange={onChange('subject')} placeholder="What’s this about?" focusBorderColor="teal.400" />
                </InputGroup>
              </FormControl>

              <FormControl isRequired isInvalid={!!hasError('message')}>
                <FormLabel>Message</FormLabel>
                <Textarea rows={6} value={values.message} onChange={onChange('message')} onBlur={onBlur('message')} placeholder="Write your message here…" focusBorderColor="customBlue.100" />
                <FormErrorMessage>{errors.message}</FormErrorMessage>
              </FormControl>

              <Button 
                  type="submit" 
                  size="lg" 
                  isLoading={isSubmitting} 
                  loadingText="Sending"
                  color="#fff"
                  bg= "black"
                  _hover={{ bg: "customBlue.100" }}
                  >
                Send Message
              </Button>
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box p={{ base: 0, lg: 2 }}>
            <Stack spacing={6} fontSize={{ base: 'md', md: 'lg' }} color="gray.700">
              <Stack direction="row" align="center">
                <Icon
                  as={MdLocationOn}
                  boxSize={6}
                  color="customBlue.100"
                  transition="transform 0.2s ease-in-out"
                  _groupHover={{ transform: "translateX(6px)" }}
                  aria-hidden="true"
                 />
                <Text>{CONTACT_ADDRESS}</Text>
              </Stack>
              <Stack direction="row" align="center">
                <Icon  
                  as={MdPhone}
                  boxSize={6}
                  color="customBlue.100"
                  transition="transform 0.2s ease-in-out"
                  _groupHover={{ transform: "translateX(6px)" }}
                  aria-hidden="true"
                 />
                <Text>
                  <Link href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}>{CONTACT_PHONE}</Link>
                </Text>
              </Stack>
              <Stack direction="row" align="center"> 
                <Icon  
                  as={MdEmail}
                  boxSize={6}
                  color="customBlue.100"
                  transition="transform 0.2s ease-in-out"
                  _groupHover={{ transform: "translateX(6px)" }}
                  aria-hidden="true"
                 />
                <Text>
                  <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>
                </Text>
              </Stack>

              <Divider />

              <Box>
                <Heading as="h3" size="md" mb={3}>Also find me on</Heading>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                  <Link href="https://www.linkedin.com/in/anneliesarbouw/" isExternal>LinkedIn</Link>
                  <Link href="https://github.com/Annie113" isExternal>GitHub</Link>
                  <Link href="mailto:anneliesarbouw@gmail.com">Email</Link>
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
