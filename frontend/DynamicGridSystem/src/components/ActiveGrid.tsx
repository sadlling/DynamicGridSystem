import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  useColorModeValue,
  IconButton,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { useState } from "react";

interface TableData {
  id: number;
  values: string[];
}

// Определяем интерфейс для пропсов компонента таблицы
interface DataTableProps {
  data: TableData[];
  columns?: number;
}

export const ActiveGrid: React.FC<DataTableProps> = ({ data = [] }) => {
  const initialData: TableData[] = [
    { id: 1, values: [""] },
    { id: 2, values: [""] },
    { id: 3, values: [""] },
  ];
  const [tableData, setTableData] = useState<TableData[]>(
    data.length == 0 ? initialData : data
  );
  const [columns, setColumns] = useState<number>(1);

  const addColumn = () => {
    setColumns(columns + 1);
    setTableData(
      tableData.map((row) => ({ ...row, values: [...row.values, ""] }))
    );
  };

  const removeColumn = () => {
    if (columns > 1) {
      setColumns(columns - 1);
      setTableData(
        tableData.map((row) => {
          const newValues = [...row.values];
          newValues.pop();
          return { ...row, values: newValues };
        })
      );
    }
  };

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
        <Box p={4}>
          <TableContainer flex={1}>
            <Table colorScheme="teal" w={"25%"}>
              <Thead>
                <Tr>
                  {Array.from({ length: columns }, (_, i) => (
                    <Th key={i} border="1px" borderColor="teal.200">
                      Column {i + 1}
                    </Th>
                  ))}
                  <Flex gap={1} ml={2}>
                    <IconButton
                      colorScheme="teal"
                      aria-label="Add column"
                      variant="outline"
                      size={"sm"}
                      icon={<AddIcon />}
                      onClick={addColumn}
                    />
                    <IconButton
                      colorScheme="teal"
                      variant="outline"
                      aria-label="Remove column"
                      size={"sm"}
                      icon={<DeleteIcon />}
                      onClick={removeColumn}
                    />
                  </Flex>
                </Tr>
              </Thead>
              <Tbody>
                {tableData.map((item) => (
                  <Tr key={item.id}>
                    {item.values.slice(0, columns).map((value, i) => (
                      <Td key={i} border="1px" borderColor="teal.200">
                        {value}{" "}
                      </Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </Box>
  );
};
