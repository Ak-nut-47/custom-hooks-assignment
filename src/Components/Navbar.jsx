import { Link as ChakraLink, Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <Flex bg="gray.600" p={4} alignItems="center">
      <ChakraLink
        as={Link}
        to="/"
        mr={6}
        fontWeight={location.pathname === "/" ? "bold" : "normal"}
        color={location.pathname === "/" ? "green.300" : "white"}
      >
        HomePage
      </ChakraLink>
      <ChakraLink
        as={Link}
        to="/throttling"
        mr={6}
        fontWeight={location.pathname === "/throttling" ? "bold" : "normal"}
        color={location.pathname === "/throttling" ? "green.300" : "white"}
      >
        Throttling Page
      </ChakraLink>
      <ChakraLink
        as={Link}
        to="/custom-hooks"
        mr={6}
        fontWeight={location.pathname === "/custom-hooks" ? "bold" : "normal"}
        color={location.pathname === "/custom-hooks" ? "green.300" : "white"}
      >
        Custom Hooks
      </ChakraLink>
    </Flex>
  );
};

export default Navbar;
