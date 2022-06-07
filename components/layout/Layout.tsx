import { Box, Container } from '@chakra-ui/react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box>
        <Container maxW="700px">
          <Box
            height="93vh"
            display="flex"
            flexDirection="column"
            justifyContent="space-between">
            <Box>
              <Header />
              {children}
            </Box>
            <Footer />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Layout;
