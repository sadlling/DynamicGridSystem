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
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface TableData {
  id: number;
  values: string[];
}

// Определяем интерфейс для пропсов компонента таблицы
interface DataTableProps {
  data?: TableData[];
  columns?: number;
}

export const ActiveGrid: React.FC<DataTableProps> = ({ data = [] }) => {
  const initialData: TableData[] = [
    { id: 1, values: [""] },
    { id: 2, values: [""] },
    { id: 3, values: [""] },
  ];
  //Table data
  const [tableData, setTableData] = useState<TableData[]>(
    data.length == 0 ? initialData : data
  );

  //change columns count
  const [columns, setColumns] = useState<number>(1);
  //editing cells
  const [editingCell, setEditingCell] = useState<{
    rowIndex: number;
    colIndex: number;
  } | null>(null);

  //editing column head
  const [editingColumnHead, setEditingColumnHead] = useState<{
    colIndex: number;
  } | null>(null);
  const [columnHeadValue, setColumnHeadValue] = useState("Column ");

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
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    setEditingCell({ rowIndex, colIndex });
  };
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number,
    colIndex: number
  ) => {
    const newValue = event.target.value;
    setTableData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex].values[colIndex] = newValue;
      return newData;
    });
  };
  const handleInputBlur = () => {
    setEditingCell(null);
  };

  const handleColumnHeadClick = (colIndex: number) => {
    setEditingColumnHead({ colIndex });
  };
  const handleColumnHeadBlur = () => {
    setEditingColumnHead(null);
  };

  const handleColumnHeadChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setColumnHeadValue(newValue);
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
                  {Array.from({ length: columns }, (_, colIndex) => (
                    <Th
                      key={colIndex}
                      border="1px"
                      borderColor="teal.200"
                      onClick={() => handleColumnHeadClick(colIndex)}
                    >
                      {editingColumnHead?.colIndex == colIndex ? (
                        <Input
                          value={columnHeadValue}
                          size={"sm"}
                          variant={"unstyled"}
                          onChange={(event) => handleColumnHeadChange(event)} //Fix editing
                          onBlur={handleColumnHeadBlur}
                        ></Input>
                      ) : (
                        columnHeadValue
                      )}
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
                {tableData.map((item, rowIndex) => (
                  <Tr key={item.id}>
                    {item.values.slice(0, columns).map((value, colIndex) => (
                      <Td
                        key={colIndex}
                        border="1px"
                        borderColor="teal.200"
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                      >
                        {editingCell?.rowIndex === rowIndex &&
                        editingCell?.colIndex === colIndex ? (
                          <Input
                            value={value}
                            size={"sm"}
                            variant={"unstyled"}
                            onChange={(event) =>
                              handleInputChange(event, rowIndex, colIndex)
                            }
                            onBlur={handleInputBlur}
                            autoFocus
                          />
                        ) : (
                          value ?? "asdasd"
                        )}
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
