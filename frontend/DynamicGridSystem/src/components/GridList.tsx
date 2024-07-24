import { Box, VStack, Text, useColorModeValue } from "@chakra-ui/react";

export const GridList = ({ grids = [] }) => {
  const testGrids = ["Grid 1", "Grid 2", "Grid 3", "Grid 4", "Grid 5"];

  const background = useColorModeValue("gray.50", "gray.600");
  const hoverBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <VStack p={4} spacing={4} align="stretch">
      {testGrids.map((gridName, index) => (
        <Box
          key={index}
          p={4}
          bg={background}
          borderRadius="md"
          boxShadow="md"
          cursor="pointer"
          _hover={{ bg: hoverBackground }}
        >
          <Text>{gridName}</Text>
        </Box>
      ))}
    </VStack>
  );
};
