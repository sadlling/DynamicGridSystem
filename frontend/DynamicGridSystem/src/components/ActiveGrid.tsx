import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  useColorModeValue,
  Button,
  HStack,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import Cell from "./Cell";

interface Column {
  id: number;
  rows: string[];
}
interface TableData {
  id: number;
  values: string[];
}
interface DataTableProps {
  data: TableData[];
}

export const ActiveGrid: React.FC<DataTableProps> = ({ data }) => {
  const [columns, setColumns] = useState<Column[]>([
    { id: 1, rows: ["", ""] }, // Изначальная колонка с пустыми строками
  ]);

  const addColumn = () => {
    const newColumn: Column = {
      id: columns.length + 1,
      rows: ["", ""],
    };
    setColumns([...columns, newColumn]);
  };
  // const removeColumn = () => {
  //   console.log(columns.splice(0, columns.length - 1));
  //   setColumns(columns.splice(0, columns.length - 1));
  // };

  const handleCellChange = (
    columnIndex: number,
    rowIndex: number,
    newValue: string
  ) => {
    console.log(newValue);
    const newColumns = [...columns];
    newColumns[columnIndex].rows[rowIndex] = newValue;
    setColumns(newColumns);
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
          <HStack align="start" gap={0}>
            {columns.map((column, columnIndex) => (
              <VStack
                key={column.id}
                border="1px"
                borderColor="teal.800"
                gap={0}
              >
                {column.rows.map((row, rowIndex) =>
                  rowIndex === 0 ? (
                    <Cell
                      key={rowIndex}
                      value={row}
                      placeholder={"Column " + Number(columnIndex + 1)}
                      onChange={(newValue) =>
                        handleCellChange(columnIndex, rowIndex, newValue)
                      }
                    />
                  ) : (
                    <Cell
                      key={rowIndex}
                      value={row}
                      onChange={(newValue) =>
                        handleCellChange(columnIndex, rowIndex, newValue)
                      }
                    />
                  )
                )}
              </VStack>
            ))}
            <IconButton
              colorScheme="teal"
              aria-label="Add column"
              icon={<AddIcon />}
              onClick={addColumn}
            />
            {/* <IconButton
              colorScheme="teal"
              aria-label="Remove column"
              icon={<CloseIcon />}
              onClick={removeColumn}
            /> */}
          </HStack>
        </Box>
        {/* <div>
          <Button onClick={removeColumn} colorScheme="teal" m={2}>
            Remove Column
          </Button>
        </div> */}
      </Flex>
    </Box>
  );
};
