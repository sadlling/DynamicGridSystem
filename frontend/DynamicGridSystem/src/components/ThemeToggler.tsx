import { useColorMode, Box, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <IconButton
       aria-label='Toggle theme'
        icon={
          colorMode === "light" ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>
        }
        onClick={toggleColorMode}
        variant="outline"
      />
    </Box>
  );
};
