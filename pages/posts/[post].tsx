import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/layout/Layout';
import ReactMarkdown from 'react-markdown';
import { Box, Text, Link as ChakraLink } from '@chakra-ui/react';
import { codeBlock } from '../../helpers/code-block';
import { PostRootInterface } from '../../interfaces/post.interface';
import { ArrowBackIcon } from '@chakra-ui/icons';

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
    };
  };
}

const Post = ({ posts, params }: BlogPageProps | any) => {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Box>
        <Box className="post">
          <Box display="flex" alignItems="center" margin="20px 0">
            <Link href="/posts">
              <ChakraLink fontSize="16px">
                <ArrowBackIcon /> Back to posts
              </ChakraLink>
            </Link>
          </Box>
          <Text as="h2">{posts?.data?.attributes?.title}</Text>
          <ReactMarkdown components={codeBlock}>
            {posts?.data?.attributes?.body}
          </ReactMarkdown>
        </Box>
      </Box>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: posts } = await axios.get<PostRootInterface>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts/`,
  );

  return {
    paths: posts.data.map((item) => '/posts/' + item.attributes.slug),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: posts } = await axios.get<PostRootInterface>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${params?.post}`,
  );

  return {
    props: {
      posts,
    },
  };
};

export default Post;
