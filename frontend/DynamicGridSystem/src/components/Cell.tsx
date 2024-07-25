import React from "react";
import { Box, Input } from "@chakra-ui/react";

interface CellProps {
  value: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
}

const Cell: React.FC<CellProps> = ({ value, placeholder = "", onChange }) => {
  return (
    <Box border="1px" borderColor="teal.100" p={2}>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        variant="unstyled"
        size="md"
        placeholder={placeholder}
      />
    </Box>
  );
};

export default Cell;
