import { helix } from "ldrs";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

export const Loader = () => {
  helix.register();

  return (
    <Flex
      minH="80vh"
      alignItems="center"
      justifyContent="center"
      m={10}
      flexDirection={"column"}
    >
      <l-helix
        size="100"
        speed="2.5"
        color={useColorModeValue("black", "white")}
      ></l-helix>
      <Text textAlign={"center"} fontSize={"4xl"} ml={3}>
        Loading, please wait...
      </Text>
    </Flex>
  );
};
