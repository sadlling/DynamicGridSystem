import { useState } from "react";
import { Loader } from "../components/Loader";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { GridList } from "../components/GridList";

const Grid = () => {
  const background = useColorModeValue("gray.100", "gray.900");
  const drawerBackground = useColorModeValue("white", "gray.800");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 1000);

  return loading ? (
    <Loader></Loader>
  ) : (
    <Flex minH="100vh" direction="column" bg={background}>
      <Header onOpen={onOpen} />

      <Flex flex="1" mt={4}>
        {/* Список чатов */}
        <Box
          w={"200px"}
          display={{ base: "none", md: "block" }}
          bg={drawerBackground}
          borderRightWidth="3px"
          borderRadius={"md"}
        >
          <GridList grids={[]} />
        </Box>

        {/* Drawer для списка чатов на мобильных устройствах */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">Grids List</DrawerHeader>
              <DrawerBody>
                <GridList grids={[]} />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Flex>
  );
};
export default Grid;
