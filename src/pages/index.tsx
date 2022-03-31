import type { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import Hero from 'src/home/hero';
import Features from 'src/home/features';
import NavBar from 'src/home/navbar';

const Main = styled.main`
  padding: 10px 5% 0;
  margin: auto;
  max-width: 1200px;

  & > div {
    margin-bottom: 25px;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BesWor - Best Works for your Resume</title>
        <meta name="description" content="BesWor - Best Works for your Resume" />
        <meta property="og:title" content="BesWor" />
        {/* <meta property="og:site_name" content="BesWor"/> */}
        <meta property="og:description" content="Best Works for your Resume" />
        <meta property="og:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <NavBar />
        <Hero />
        <Features />
      </Main>
    </>
  );
};

export default Home;
