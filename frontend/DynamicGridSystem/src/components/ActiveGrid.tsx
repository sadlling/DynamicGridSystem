import { AddIcon, DeleteIcon, TriangleDownIcon } from "@chakra-ui/icons";
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ColumnType from "../types/Grid";
import { GridInput } from "./GridInput";

interface TableData {
  id: number;
  values: (string | number | readonly string[])[];
}

// Определяем интерфейс для пропсов компонента таблицы
interface DataTableProps {
  data?: TableData[];
  columns?: number;
}

export const ActiveGrid: React.FC<DataTableProps> = ({ data = [] }) => {
  const initialData: TableData[] = [
    { id: 1, values: ["qwe,123,4"] },
    { id: 2, values: ["11"] },
    { id: 3, values: ["asd"] },
  ];

  const initialColumnTypes: ColumnType[] = [
    ColumnType.Numeric,
    ColumnType.String,
    ColumnType.String,
  ];

  //Column head data
  const [columnHeaders, setColumnHeaders] = useState<string[]>(["Column 1"]);
  //editing column head
  const [editingHeader, setEditingHeader] = useState<number | null>(null);

  //Table data
  const [tableData, setTableData] = useState<TableData[]>(
    data.length == 0 ? initialData : data
  );
  //column types
  const [columnTypes, setColumnTypes] =
    useState<ColumnType[]>(initialColumnTypes);
  //change columns count
  const [columns, setColumns] = useState<number>(1);
  //editing cells
  const [editingCell, setEditingCell] = useState<{
    rowIndex: number;
    colIndex: number;
  } | null>(null);

  const addColumn = () => {
    setColumns(columns + 1);
    setColumnHeaders([...columnHeaders, `Column ${columns + 1}`]);
    setColumnTypes([...columnTypes, ColumnType.String]);
    setTableData(
      tableData.map((row) => ({ ...row, values: [...row.values, ""] }))
    );
  };

  const removeColumn = () => {
    if (columns > 2) {
      setColumns(columns - 1);
      setColumnHeaders(columnHeaders.slice(0, -1));
      setColumnTypes(columnTypes.slice(0, -1));
      setTableData(
        tableData.map((row) => {
          const newValues = [...row.values];
          newValues.pop();
          return { ...row, values: newValues };
        })
      );
    }
  };
  const addRow = () => {
    const newRow: TableData = {
      id: tableData.length + 1,
      values: Array(columns).fill(""),
    };
    setTableData([...tableData, newRow]);
  };
  const removeRow = () => {
    if (tableData.length > 1) {
      setTableData(tableData.slice(0, -1));
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
      return newData; //check values in console
    });
  };
  const handleInputBlur = () => {
    setEditingCell(null);
    console.log(tableData);
  };

  const handleHeaderClick = (colIndex: number) => {
    setEditingHeader(colIndex);
  };
  const handleHeaderBlur = () => {
    setEditingHeader(null);
  };

  const handleHeaderChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    colIndex: number
  ) => {
    const newValue = event.target.value;
    setColumnHeaders((prevHeaders) => {
      const newHeaders = [...prevHeaders];
      newHeaders[colIndex] = newValue;
      return newHeaders;
    });
  };
  const handleColumnTypeChange = (colIndex: number, newType: ColumnType) => {
    setColumnTypes((prevTypes) => {
      const newTypes = [...prevTypes];
      newTypes[colIndex] = newType;
      return newTypes;
    });
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
                      minWidth={"150px"}
                      border="1px"
                      borderColor="teal"
                      onDoubleClick={() => handleHeaderClick(colIndex)}
                    >
                      {editingHeader === colIndex ? (
                        <Input
                          variant={"unstyled"}
                          value={columnHeaders[colIndex]}
                          onChange={(event) =>
                            handleHeaderChange(event, colIndex)
                          }
                          onBlur={handleHeaderBlur}
                          autoFocus
                          width={"100%"}
                        />
                      ) : (
                        <Box w={"100%"} gap={4}>
                          {columnHeaders[colIndex]}
                          <Menu>
                            <MenuButton
                              as={IconButton}
                              aria-label="Options"
                              icon={<TriangleDownIcon />}
                              variant="unstyled"
                            />
                            <MenuList>
                              {(
                                Object.keys(ColumnType) as Array<
                                  keyof typeof ColumnType
                                >
                              ).map((value, index) => (
                                <MenuItem
                                  key={index}
                                  onClick={() =>
                                    handleColumnTypeChange(
                                      colIndex,
                                      ColumnType[
                                        value as keyof typeof ColumnType
                                      ]
                                    )
                                  }
                                >
                                  {value}
                                </MenuItem>
                              ))}
                            </MenuList>
                          </Menu>
                        </Box>
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
                        padding={4}
                        key={colIndex}
                        border="1px"
                        borderColor="teal"
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                      >
                        {editingCell?.rowIndex === rowIndex &&
                        editingCell?.colIndex === colIndex ? (
                          <GridInput
                            value={value}
                            type={columnTypes[colIndex]}
                            rowIndex={rowIndex}
                            colIndex={colIndex}
                            onChange={(event) =>
                              handleInputChange(event, colIndex, rowIndex)
                            }
                            onBlur={handleInputBlur}
                          ></GridInput>
                        ) : (
                          //TODO:FIX render values
                          // <Input
                          //   value={value}
                          //   size={"sm"}
                          //   variant={"unstyled"}
                          //   onChange={(event) =>
                          //     handleInputChange(event, rowIndex, colIndex)
                          //   }
                          //   onBlur={handleInputBlur}
                          //   autoFocus
                          // />
                          value ?? ""
                        )}
                      </Td>
                    ))}
                    <Flex
                      border={"1px"}
                      borderColor={"teal"}
                      height={"54px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Checkbox></Checkbox>
                    </Flex>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex gap={1} mt={2}>
            <IconButton
              colorScheme="teal"
              aria-label="Add row"
              variant="outline"
              size={"sm"}
              icon={<AddIcon />}
              onClick={addRow}
            />
            <IconButton
              colorScheme="teal"
              variant="outline"
              aria-label="Remove row"
              size={"sm"}
              icon={<DeleteIcon />}
              onClick={removeRow}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
