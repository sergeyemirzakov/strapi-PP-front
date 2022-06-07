import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Contacts = () => {
  const linkColor = useColorModeValue('purple.700', 'purple.300');

  return (
    <Box marginTop="40px">
      <Box marginBottom="20px">
        <Text as="h2" fontSize="24px">
          Contacts:
        </Text>
      </Box>
      <UnorderedList>
        <ListItem>
          <Link
            display="inline-flex"
            alignItems="baseline"
            color={linkColor}
            href="https://www.linkedin.com/"
            isExternal>
            <ExternalLinkIcon />
            LinkedIn
          </Link>
          : You can get information about my work-experience{' '}
        </ListItem>
        <ListItem>
          <Link
            display="inline-flex"
            alignItems="baseline"
            color={linkColor}
            href="https://www.linkedin.com/"
            isExternal>
            <ExternalLinkIcon />
            Github
          </Link>
          : Dont be so seriosly 🥸 when you will watch my github page, because
          usually I use it for my experiments or for drafts
        </ListItem>
        <ListItem>
          <Link
            display="inline-flex"
            alignItems="baseline"
            color={linkColor}
            href="https://www.linkedin.com/"
            isExternal>
            <ExternalLinkIcon />
            Gmail
          </Link>
          : If you have any questions or suggestions you can write here and I always
          answer you
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Contacts;
