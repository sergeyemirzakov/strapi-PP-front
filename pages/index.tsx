import type { NextPage } from 'next';
import Head from 'next/head';
import Contacts from '../components/contacts/Contacts';
import LastArticles from '../components/last-articles/LastArticles';
import Layout from '../components/layout/Layout';
import Profile from '../components/profile/Profile';
import AdditionalInfo from '../components/additional-info/AdditionalInfo';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <Profile />
        <LastArticles />
        <Contacts />
        <AdditionalInfo />
      </Layout>
    </>
  );
};

export default Home;
