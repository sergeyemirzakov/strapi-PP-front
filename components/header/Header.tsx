import Link from 'next/link';
import { Box, Container, Link as ChakraLink } from '@chakra-ui/react';
import ThemeToggler from '../theme-toggle/ThemeToggler';

const Header = () => {
  return (
    <Box
      bg="gray.700"
      bgGradient="linear(to-b, #181f46 30%, #412086)"
      padding="10px"
      margin="0 0 40px 0"
      marginBottom="40px"
      position="fixed"
      left="0"
      right="0"
      top="0"
      zIndex="100">
      <Container maxW="700px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Box color="white" marginRight="20px">
              <Link href="/">
                <ChakraLink style={{ textDecoration: 'none' }}>🏡 Home</ChakraLink>
              </Link>
            </Box>
            <Box color="white">
              <Link href="/posts">
                <ChakraLink style={{ textDecoration: 'none' }}>📚 Blog</ChakraLink>
              </Link>
            </Box>
          </Box>
          <Box>
            <ThemeToggler />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
