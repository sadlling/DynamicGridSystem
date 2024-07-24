import {
  Flex,
  Text,
  useColorModeValue,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MainIcon from "./icons/MainIcon";
import { ThemeToggler } from "./ThemeToggler";

interface HeaderProps {
  onOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpen }) => {
  return (
    <Flex
      w="full"
      px="4"
      py="2"
      align="center"
      justify="start"
      bg={useColorModeValue("white", "gray.800")}
      borderBottomWidth="1px"
      gap={4}
    >
      <IconButton
        display={{ base: "block", xl: "none" }}
        onClick={onOpen}
        icon={<HamburgerIcon></HamburgerIcon>}
        aria-label="Open menu"
        variant="outline"
        mr={3}
      />
      <MainIcon></MainIcon>
      <Text flexGrow={2} fontSize="2xl" fontWeight="bold">
        Dynamic Grid System
      </Text>
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        UserName???
      </Text>
      <Avatar
        size={"sm"}
        src={
          "https://plus.unsplash.com/premium_vector-1719858612118-269cd46ea250?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <ThemeToggler></ThemeToggler>
      {/* <Text
        fontSize="2xl"
        fontWeight="bold"
        _hover={{ textColor: useColorModeValue("red.500", "red") }}
      >
        Quit
      </Text> */}
    </Flex>
  );
};
