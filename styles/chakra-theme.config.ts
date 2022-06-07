import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const colorMode: ThemeConfig = {
  initialColorMode: 'dark',
};

export const chakraCustomTheme = extendTheme({
  colorMode,
  fonts: {
    body: 'ABeeZee, sans-serif',
  },
});
