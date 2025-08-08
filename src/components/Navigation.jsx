import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink, NavLink } from "react-router-dom";

export const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure();

  const navLinks = [
    { label: "About", to: "/about" },
    { label: "Experience", to: "/experience" },
  ];

  return (
    <Box as="nav" w="100%" bg="white">
      <Flex
        maxW="1200px"
        borderBottom="1px solid #eaeaea"
        m="auto"
        pl={12}
        pr={12}
        py={{ base: 4, md: 9 }}
        justify="space-between"
      >
        {/* Logo + Mobile menu button on left */}
        <Flex pl={2} align="center" gap={8}>
          <Text
            as={RouterLink}
            to="/"
            fontSize="2xl"
            fontWeight="bold"
            _hover={{ textDecoration: "none", color: "customRed.100" }}
          >
            Annelies Mälzer
          </Text>

          {/* Mobile hamburger */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle Navigation"
            size="sm"
          />
        </Flex>

        {/* Desktop Nav Links */}
        <Flex display={{ base: "none", md: "flex" }} align="center" gap={12}>
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end>
              {({ isActive }) => (
                <Button
                  as="span"
                  variant="navLink" // uses Button.variants.navLink from theme
                  data-active={isActive ? "true" : undefined}
                  _hover={{ textDecoration: "none", color: "customRed.100", fontWeight:"500" }}
                >
                  {link.label}
                </Button>
              )}
            </NavLink>
          ))}

          {/* Contact Button */}
          <Button
            as={RouterLink}
            to="/contact"
            variant="cta" // uses Button.variants.cta from theme
            mr={9}
          >
            Contact
          </Button>
        </Flex>
      </Flex>

      {/* Mobile Menu Collapse */}
      <Collapse in={isOpen} animateOpacity>
        <Stack mt={2} spacing={4} display={{ md: "none" }} px={6} pb={4}>
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end>
              {({ isActive }) => (
                <Button
                  as="span"
                  variant="ghost"
                  w="full"
                  justifyContent="start"
                  data-active={isActive ? "true" : undefined}
                >
                  {link.label}
                </Button>
              )}
            </NavLink>
          ))}

          <Button as={RouterLink} to="/contact" variant="cta" w="full" px={6}>
            Contact
          </Button>
        </Stack>
      </Collapse>

      {/* Spacer */}
      <Box height="10px" />
    </Box>
  );
};
