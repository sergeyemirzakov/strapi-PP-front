import Link from 'next/link';
import Image from 'next/image';
import { Box, Text, Link as ChakraLink } from '@chakra-ui/react';

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="60vh">
      <Image
        src="/images/404error.png"
        width="500px"
        height="200px"
        alt="404orror"
      />
      <Text as="h1" fontSize="28px">
        404 - Page Not Found
      </Text>
      <Box marginTop="10px">
        <Link href="/">
          <ChakraLink fontSize="22px">🏡 Go back home</ChakraLink>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
