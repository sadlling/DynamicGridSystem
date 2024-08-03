// // import { AddIcon, DeleteIcon, TriangleDownIcon } from "@chakra-ui/icons";
// // import {
// //   Flex,
// //   Box,
// //   useColorModeValue,
// //   IconButton,
// //   TableContainer,
// //   Table,
// //   Thead,
// //   Tr,
// //   Th,
// //   Tbody,
// //   Td,
// //   Input,
// //   Menu,
// //   MenuButton,
// //   MenuList,
// //   MenuItem,
// //   Checkbox,
// // } from "@chakra-ui/react";
// import { AgGridReact } from "ag-grid-react";
// import React, { useCallback, useState } from "react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-quartz.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { Box } from "@chakra-ui/react";
// import {
//   CellEditingStartedEvent,
//   CellEditingStoppedEvent,
//   ColDef,
//   GetRowIdParams,
// } from "ag-grid-community";
// interface TableData {
//   id: number;
//   values: string[];
// }

// // Определяем интерфейс для пропсов компонента таблицы
// interface DataTableProps {
//   data?: TableData[];
//   columns?: number;
// }

// export const ActiveGrid: React.FC<DataTableProps> = ({ data = [] }) => {
//   const currentTheme: string | null = localStorage.getItem(
//     "chakra-ui-color-mode"
//   );

//   const [rowData, setRowData] = useState<any[]>([
//     { id: "aa", make: "Toyota", model: "Celica", price: 35000 },
//     { id: "bb", make: "Ford", model: "Mondeo", price: 32000 },
//     { id: "cc", make: "Porsche", model: "Boxster", price: 72000 },
//     { id: "dd", make: "BMW", model: "5 Series", price: 59000 },
//     { id: "ee", make: "Dodge", model: "Challanger", price: 35000 },
//     { id: "ff", make: "Mazda", model: "MX5", price: 28000 },
//     { id: "gg", make: "Horse", model: "Outside", price: 99000 },
//   ]);
//   const [columnDefs, setColumnDefs] = useState<ColDef[]>([
//     { field: "make" },
//     { field: "model" },
//     { field: "price", filter: "agNumberColumnFilter" },
//   ]);
//   const getRowId = useCallback((params: GetRowIdParams) => {
//     return params.data.id;
//   }, []);
//   const onCellEditingStarted = useCallback((event: CellEditingStartedEvent) => {
//     console.log("cellEditingStarted");
//   }, []);

//   const onCellEditingStopped = useCallback((event: CellEditingStoppedEvent) => {
//     console.log("cellEditingStopped");
//   }, []);

//   return (
//     <Box
//       className={
//         currentTheme === "dark" ? "ag-theme-quartz-dark" : "ag-theme-quartz"
//       }
//       height={"90vh"}
//     >
//       <AgGridReact
//         columnDefs={columnDefs}
//         rowData={rowData}
//         enableRangeSelection={true}
//         onCellEditingStarted={onCellEditingStarted}
//         onCellEditingStopped={onCellEditingStopped}
//         getRowId={getRowId}
//       />
//     </Box>
//   );
// };
import React, { useCallback, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
// import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import {
  CellEditingStartedEvent,
  CellEditingStoppedEvent,
  ColDef,
  // ColGroupDef,
  // GridApi,
  // GridOptions,
  ModuleRegistry,
  RowEditingStartedEvent,
  RowEditingStoppedEvent,
  RowPinnedType,
  // createGrid,
} from "ag-grid-community";
import { Box } from "@chakra-ui/react";
import { getData } from "./data";
// ModuleRegistry.registerModules([ClientSideRowModelModule]);

export const ActiveGrid = () => {
  const currentTheme: string | null = localStorage.getItem(
    "chakra-ui-color-mode"
  );
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<any[]>(getData());
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "firstName" },
    { field: "lastName" },
    { field: "gender" },
    { field: "age" },
    { field: "mood" },
    { field: "country" },
    { field: "address", minWidth: 550 },
  ]);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      editable: true,
    };
  }, []);

  // const onRowEditingStarted = useCallback((event: RowEditingStartedEvent) => {
  //   console.log("never called - not doing row editing");
  // }, []);

  // const onRowEditingStopped = useCallback((event: RowEditingStoppedEvent) => {
  //   console.log("never called - not doing row editing");
  // }, []);

  const onCellEditingStarted = useCallback((event: CellEditingStartedEvent) => {
    console.log("cellEditingStarted");
    console.log(event.data);
    console.log(gridRef.current?.api.getEditingCells());
  }, []);

  const onCellEditingStopped = useCallback((event: CellEditingStoppedEvent) => {
    console.log("cellEditingStopped");
  }, []);

  return (
    <Box
      className={
        currentTheme === "dark" ? "ag-theme-quartz-dark" : "ag-theme-quartz"
      }
      height={"90vh"}
      width={"100%"}
    >
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        // onRowEditingStarted={onRowEditingStarted}
        // // onRowEditingStopped={onRowEditingStopped}
        onCellEditingStarted={onCellEditingStarted}
        onCellEditingStopped={onCellEditingStopped}
      />
    </Box>
  );
};
