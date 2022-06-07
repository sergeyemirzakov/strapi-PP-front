import { ColorModeScript, Box } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';
import { chakraCustomTheme } from '../styles/chakra-theme.config';

const Document = () => {
  return (
    <Html>
      <Head />
      <Box as="body" paddingTop="60px">
        <ColorModeScript initialColorMode={chakraCustomTheme.colorMode} />
        <Main />
        <NextScript />
      </Box>
    </Html>
  );
};

export default Document;
