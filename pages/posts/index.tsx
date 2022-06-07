import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Layout from '../../components/layout/Layout';
import { Box, Text, UnorderedList, ListItem, Spinner } from '@chakra-ui/react';
import { PostRootInterface } from '../../interfaces/post.interface';

interface BlogPageProps {
  posts: {
    data: {
      attributes: {
        body: string;
        createdAt: Date;
        publishedAt: Date;
        title: string;
        slug: string;
        updatedAt: Date;
      };
      id: number;
    }[];
  };
}

const BlogPage = ({ posts }: BlogPageProps) => {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Box>
        <Box textAlign="center">
          <Text as="h1" fontSize="24px" marginBottom="20px">
            You are on the blog page 📚
          </Text>
          <Text>
            Here you can read really interesting and important articles about
            interface development, and I hope that you will visit this page often.
            And now go for knowledge
            <Box as="span" fontSize="25px">
              🏃‍♂️💨
            </Box>
          </Text>
        </Box>
        <Box margin="40px 0 20px 0">
          <Text as="h2" marginBottom="10px" fontSize="24px">
            Posts:
          </Text>
          <UnorderedList>
            {!!posts &&
              posts.data.map((item: any) => (
                <ListItem key={item.attributes.title}>
                  <Link href={`/posts/${item.attributes.slug}`}>
                    <ChakraLink fontSize="18px">{item.attributes.title}</ChakraLink>
                  </Link>
                </ListItem>
              ))}
          </UnorderedList>
          {posts?.data === undefined && (
            <Box>
              <Spinner
                thickness="4px"
                speed="0.50s"
                emptyColor="gray.200"
                color="purple.500"
              />
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: posts } = await axios.get<PostRootInterface>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts/`,
    );

    if (!posts) {
      return { notFound: true };
    }

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default BlogPage;
