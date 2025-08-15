// theme.jsx
import { extendTheme } from "@chakra-ui/react";

// Breakpoints
const breakpoints = {
  sm: "30em",   // 480
  md: "48em",   // 768
  lg: "62em",   // 992
  xl: "80em",   // 1280
  "2xl": "90em", // 1440
  lg2: "64em",   // 1024 custom
};

// Colors
const colors = {
  customBlue: {
    25: "#EBF3FA",
    50: "#C6DAEA",
    100: "#97b7d1",
    500: "#688FB0",
    700: "#436E92",
  },
  customRed: {
    100: "#b82331", // used for active + hover
    // 500: "#9b1f2a", // optional mid-tone if you need it later
  },
  gray: {
    100: "#eaeaea",
    500: "#908F8F",
    900: "#111111",
  },
};

// Components
const Button = {
  variants: {
    // Navigation link button (used with as={NavLink})
    navLink: {
      bg: "transparent",
      px: 0,
      height: "auto",
      color: "gray.500",
      fontWeight: "normal",
      textDecoration: "none",
      _hover: {
        color: "customRed.100",
        fontWeight: "bold",
        textDecoration: "none",
      },
      // Active route: NavLink sets aria-current="page"
      "&[aria-current='page']": {
        fontWeight: "bold",
        color: "customRed.100",
      },
      _focusVisible: {
        boxShadow: "0 0 0 2px var(--chakra-colors-gray-100)",
        outline: "none",
      },
    },

    // Call-to-action button
    cta: {
      bg: "black",
      color: "white",
      borderRadius: "full",
      _hover: { bg: "customBlue.100" },
      _focusVisible: {
        boxShadow: "0 0 0 2px var(--chakra-colors-gray-100)",
        outline: "none",
      },
    },
  },
};

const IconButton = {
  variants: {
    social: {},
  },
};

const Heading = {
  variants: {
    h2: {
      fontSize: ["2xl", "lg2"],
      fontWeight: "bold",
    },
  },
};

const Link = {
  baseStyle: {}, // (not used for nav; kept for future)
  variants: {
    nav: {},
  },
};

const theme = extendTheme({
  breakpoints,
  colors,
  components: {
    Button,
    IconButton,
    Heading,
    Link,
  },
});

export default theme;
