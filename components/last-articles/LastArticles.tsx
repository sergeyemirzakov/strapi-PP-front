import { useColorModeValue } from '@chakra-ui/react';
import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Link as ChakraLink,
  Spinner,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Posts } from './LastArticles.interfaces';

const LastArticles = () => {
  const bg = useColorModeValue('gray.200', 'gray.700');

  const [lastTwoArticles, setLastTwoArticles] = useState<Posts>();

  useEffect(() => {
    const getLastTwoArticles = async () => {
      let { data } = await axios.get<Posts>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/posts/?pagination[pageSize]=2&sort=[id]%3Adesc`,
      );
      setLastTwoArticles(data);
    };
    getLastTwoArticles();
  }, []);

  return (
    <>
      <Box marginBottom="10px">
        <Text>I will be glad if you visit my blog 😌</Text>
      </Box>
      <Box bg={bg} padding="20px">
        <Box marginBottom="10px">
          <Text as="h2" fontSize="24px">
            Last Articles:
          </Text>
        </Box>
        <UnorderedList display="block">
          {!!lastTwoArticles &&
            lastTwoArticles.data.map((p) => (
              <ListItem key={p.attributes.slug} marginBottom="5px">
                <Link href={'/posts/' + p.attributes.slug}>
                  <ChakraLink fontSize="18px">{p.attributes.title}</ChakraLink>
                </Link>
              </ListItem>
            ))}
        </UnorderedList>
        <Text>{lastTwoArticles?.data.length === 0 && 'There is no data yet'}</Text>
        {lastTwoArticles === undefined && (
          <Box>
            <Spinner
              thickness="4px"
              speed="0.50s"
              emptyColor="gray.200"
              color="purple.500"
            />
          </Box>
        )}
        {/* <Text>{lastTwoArticles === undefined && 'There is no data yet'}</Text> */}
        <Link href="/posts">
          <ChakraLink
            bg="purple.700"
            color="white"
            display="inline-flex"
            padding="5px 10px"
            cursor="pointer"
            alignItems="center"
            marginTop="20px">
            <Text fontSize="14px">Read blog</Text>
            <Box as="span">
              <ChevronRightIcon />
            </Box>
          </ChakraLink>
        </Link>
      </Box>
    </>
  );
};

export default LastArticles;
