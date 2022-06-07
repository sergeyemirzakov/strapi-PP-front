import { useColorMode } from '@chakra-ui/react';
import { Box, Input, FormLabel } from '@chakra-ui/react';

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box display="flex">
      <Input
        onChange={toggleColorMode}
        className="switch"
        id="switch"
        name="switch"
        type="checkbox"
        checked={colorMode !== 'light' ? true : false}
      />
      <label className="label" htmlFor="switch">
        <Box className="ball"></Box>
      </label>
    </Box>
  );
};

export default ThemeToggler;
