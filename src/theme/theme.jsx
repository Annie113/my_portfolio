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
    100: "#b82331",
  },
  gray: {
    100: "#eaeaea",
    500: "#908F8F",
  },
};

// Link styles
const Link = {
  baseStyle: {},
  variants: {
    nav: {},
  },
};

// Button styles
const Button = {
  variants: {
    navLink: {
      variant: "link",
      color: "gray.500",
      fontVariationSettings: "'wght' 400",
      _hover: {
        color: "customRed.500",
        fontVariationSettings: "'wght' 700",
        letterSpacing: "0.1px", 
      },
    },
    cta: {
      bg: "black",
      color: "white",
      borderRadius: "full",
      _hover: { bg: "customBlue.100" },
    },
  },
};

// IconButton styles
const IconButton = {
  variants: {
    social: {},
  },
};

// ✅ Heading styles
const Heading = {
  variants: {
    h2: {
      fontSize: ["2xl", "lg2"],
      fontWeight: "bold",
    },
  },
};

const theme = extendTheme({
  breakpoints,
  colors,
  components: {
    Link,
    Button,
    IconButton,
    Heading, // ✅ Added Heading component here
  },
});

export default theme;
