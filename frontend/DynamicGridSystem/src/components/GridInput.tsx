import React from "react";
import ColumnType from "../types/Grid";
import { Input } from "@chakra-ui/react";

interface GridInputProps {
  value: string | number | readonly string[];
  type: ColumnType;
  rowIndex: number;
  colIndex: number;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number,
    colIndex: number
  ) => void;
  onBlur: () => void;
}

export const GridInput: React.FC<GridInputProps> = ({
  value,
  type,
  rowIndex,
  colIndex,
  onChange,
  onBlur,
}) => {
  switch (type) {
    case ColumnType.String:
      return (
        <Input
          value={value}
          size={"sm"}
          variant={"unstyled"}
          onChange={(event) => onChange(event, rowIndex, colIndex)}
          onBlur={onBlur}
          autoFocus
        />
      );
    case ColumnType.Numeric:
      return (
        <Input
          value={value}
          size={"sm"}
          type="number"
          variant={"unstyled"}
          onChange={(event) => onChange(event, rowIndex, colIndex)}
          onBlur={onBlur}
          autoFocus
        />
      );
    case ColumnType.Email:
      return (
        <Input
          value={value}
          size={"sm"}
          type="email"
          variant={"unstyled"}
          onChange={(event) => onChange(event, rowIndex, colIndex)}
          onBlur={onBlur}
          autoFocus
        />
      );
    case ColumnType.RegexpValidated:
      return (
        <Input
          value={value}
          size={"sm"}
          variant={"unstyled"}
          onChange={(event) => onChange(event, rowIndex, colIndex)}
          onBlur={onBlur}
          autoFocus
        />
      );
    case ColumnType.SingleSelect:
      return (
        <Input></Input>
        // <select value={props.value} onChange={(e) => onChange(e.target.value)}>
        //   {singleSelectSettings.options.map((option: SelectOption) => (
        //     <option key={option.value} value={option.value}>
        //       {option.label}
        //     </option>
        //   ))}
        // </select>
      );
    case ColumnType.MultiSelect:
      //   const multiSelectSettings: SelectSettings = JSON.parse(column.settings);
      //   const selectedValues = value.split(",");
      //   return (
      //     <select
      //       multiple
      //       value={selectedValues}
      //       onChange={(e) =>
      //         onChange(
      //           Array.from(
      //             e.target.selectedOptions,
      //             (option) => option.value
      //           ).join(",")
      //         )
      //       }
      //     >
      //       {multiSelectSettings.options.map((option: SelectOption) => (
      //         <option key={option.value} value={option.value}>
      //           {option.label}
      //         </option>
      //       ))}
      //     </select>
      //   );
      return <Input></Input>;
    case ColumnType.ExternalCollection:
      //getvalues frow other grid
      return <Input></Input>;

    default:
      return null;
  }
};
