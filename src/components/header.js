import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Image,
  Skeleton,
  Stack,
  Divider
} from "@chakra-ui/core";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const ImageProfile = () => (
  <Image
    rounded="full"
    size="40px"
    src="https://bit.ly/sage-adebayo"
    alt="Segun Adebayo"
  />
);

const HeaderContent = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Fooder
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="#63171B"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
      >
        <MenuItems>Home</MenuItems>
        <MenuItems>Tasty</MenuItems>
        <MenuItems>Famous</MenuItems>
        <MenuItems>About</MenuItems>
        <MenuItems>Contact Us</MenuItems>
        <Box as="span" display={{ sm: "none", md: "flex" }}>
          <ImageProfile />
        </Box>
      </Box>
    </>
  );
};

const Header = props => (
  <>
    <Stack>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        px="1"
        py="3"
        w="100%"
      >
        <HeaderContent />
      </Flex>
      <Divider />
    </Stack>
  </>
);

export default Header;
