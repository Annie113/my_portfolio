import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
];

export const Navigation = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const mobileMenuId = "primary-navigation";

  return (
    <Box as="nav" w="100%" bg="white" aria-label="Primary">
      <Container maxW="1200px" px={{ base: 5, md: 12 }}>
        <Flex
          borderBottom="1px solid #eaeaea"
          py={{ base: 4, md: 9 }}
          justify="space-between"
          align="center"
        >
          {/* Logo + Mobile toggle */}
          <Flex align="center" gap={8}>
            <Text
              as={RouterLink}
              to="/"
              fontSize="2xl"
              fontWeight="bold"
              _hover={{ textDecoration: "none", color: "customRed.100" }}
            >
              Annelies Mälzer
            </Text>

            <IconButton
              display={{ base: "inline-flex", md: "none" }}
              onClick={onToggle}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              variant="ghost"
              aria-label="Toggle navigation menu"
              aria-controls={mobileMenuId}
              aria-expanded={isOpen}
            />
          </Flex>

          {/* Desktop Nav */}
          <Flex display={{ base: "none", md: "flex" }} align="center" gap={12}>
            {NAV_LINKS.map((link) => (
              <Button
                key={link.to}
                as={NavLink}
                to={link.to}
                end
                variant="navLink"
                minW="8ch" // prevents layout shift when bold
              >
                {link.label}
              </Button>
            ))}

            <Button as={RouterLink} to="/contact" variant="cta" mr={9}>
              Contact
            </Button>
          </Flex>
        </Flex>
      </Container>

      {/* Mobile Nav */}
      <Collapse in={isOpen} animateOpacity unmountOnExit>
        <Stack
          id={mobileMenuId}
          mt={2}
          spacing={4}
          display={{ md: "none" }}
          px={6}
          pb={4}
        >
          {NAV_LINKS.map((link) => (
            <Button
              key={link.to}
              as={NavLink}
              to={link.to}
              end
              variant="navLink"
              w="full"
              justifyContent="start"
              onClick={onClose}
            >
              {link.label}
            </Button>
          ))}

          <Button
            as={RouterLink}
            to="/contact"
            variant="cta"
            w="full"
            px={6}
            onClick={onClose}
          >
            Contact
          </Button>
        </Stack>
      </Collapse>
    </Box>
  );
};
