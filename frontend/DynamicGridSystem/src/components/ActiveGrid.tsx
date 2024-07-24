import { AddIcon } from "@chakra-ui/icons";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  Box,
  useColorModeValue,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

interface TableData {
  id: number;
  values: string[];
}

interface DataTableProps {
  data: TableData[];
}

export const ActiveGrid: React.FC<DataTableProps> = ({ data }) => {
  const [columns, setColumns] = useState(1);

  const addColumn = () => setColumns((prev) => prev + 1);
  const removeColumn = () => setColumns((prev) => (prev > 1 ? prev - 1 : 1));
  // const data = [
  //   { id: 1, name: "John Doe", age: 25, email: "john@example.com" },
  // ];

  return (
    <Box
      h="full"
      bg={useColorModeValue("white", "gray.800")}
      borderRadius="md"
      boxShadow="md"
      p={2}
    >
      <Flex
        h="100%"
        bg={useColorModeValue("gray.50", "gray.700")}
        borderRadius="md"
        p={4}
        overflowY="auto"
        flexDirection={"column"}
        // justifyContent={"end"}
      >
        <TableContainer>
          <Table colorScheme="teal" w={"20vw"}>
            <Thead>
              <Tr>
                {Array.from({ length: columns }, (_, i) => (
                  <Th key={i}>Column {i + 1}</Th>
                ))}
                <IconButton
                  colorScheme="teal"
                  aria-label="Add Column"
                  icon={<AddIcon />}
                />
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => (
                <Tr key={item.id}>
                  {item.values.slice(0, columns).map((value, i) => (
                    <Td key={i}>{value}</Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <div>
          <Button onClick={addColumn} colorScheme="teal" m={2}>
            Add Column
          </Button>
          <Button onClick={removeColumn} colorScheme="teal" m={2}>
            Remove Column
          </Button>
        </div>
      </Flex>
    </Box>
  );
};
