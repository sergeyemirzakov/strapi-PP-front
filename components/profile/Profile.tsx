import { useColorModeValue } from '@chakra-ui/react';
import { Box, Text } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import ProfilePhoto from './ProfilePhoto';
import Layout from '../layout/Layout';

const Profile = () => {
  const borderBottomColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="40px">
        <ProfilePhoto />
        <Text as="h1" textAlign="center" fontSize="24px">
          Hello 👋 <br />
          My name is Sergey Emirzakov 👨🏻‍💻
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginBottom="60px">
        <Box
          as="span"
          display="inline-flex"
          alignItems="center"
          marginTop="30px"
          marginBottom="10px">
          <Box as="span" marginRight="5px">
            <ChatIcon />
          </Box>
          <Text textAlign="center" fontSize="15px">
            A little about me:
          </Text>
        </Box>
        <Box
          paddingBottom="40px"
          borderBottom="2px dashed"
          borderColor={borderBottomColor}>
          <Text textAlign="center" fontSize="19px">
            I am a frontend developer and this is my personal page. I work full-time
            remotely, write my projects and share my knowledge about frontend
            development ❤️
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
