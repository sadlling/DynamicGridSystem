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
import { ActiveGrid } from "../components/ActiveGrid";

const Grid = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(true);

  const background = useColorModeValue("gray.100", "gray.900");
  const drawerBackground = useColorModeValue("white", "gray.800");

  setTimeout(() => setLoading(false), 1000);

  const sampleData = [
    { id: 1, values: ["John Doe"] },
    { id: 2, values: ["Jane Smith", "30", "jane@example.com"] },
    { id: 3, values: ["Sam Green", "35", "sam@example.com"] },
  ];

  return loading ? (
    <Loader></Loader>
  ) : (
    <Flex minH="100vh" direction="column" bg={background}>
      <Header onOpen={onOpen} />

      <Flex flex="1" mt={4}>
        {/* Список чатов */}
        <Box
          w={"200px"}
          display={{ base: "none", xl: "block" }}
          bg={drawerBackground}
          borderRightWidth="3px"
          borderRadius={"md"}
        >
          <GridList grids={[]} />
        </Box>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={"md"}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">Grids List</DrawerHeader>
              <DrawerBody>
                <GridList grids={[]} />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
        <Box w={{ base: "full", md: "90%" }} pl={2} pr={2}>
          <ActiveGrid data={sampleData}></ActiveGrid>
        </Box>
      </Flex>
    </Flex>
  );
};
export default Grid;
