import React, { useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { ColDef } from "ag-grid-community";
import { Box } from "@chakra-ui/react";

export const ActiveGrid = () => {
  const currentTheme: string | null = localStorage.getItem(
    "chakra-ui-color-mode"
  );
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);
  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      editable: true,
    };
  }, []);

  // const onCellEditingStarted = useCallback((event: CellEditingStartedEvent) => {
  //   console.log("cellEditingStarted");
  //   console.log(event.data);
  //   console.log(gridRef.current?.api.getEditingCells());
  // }, []);

  // const onCellEditingStopped = useCallback((event: CellEditingStoppedEvent) => {
  //   console.log("cellEditingStopped");
  // }, []);

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
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
      ></AgGridReact>
    </Box>
  );
};
