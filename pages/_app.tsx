import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import '../styles/theme-toggler.scss';
import '../styles/energy-animation.css';
import '../styles/post.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { chakraCustomTheme } from '../styles/chakra-theme.config';

import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraCustomTheme}>
      <NextNProgress height={3} color={'#ffd25c'} options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
