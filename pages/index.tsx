import { FC, ReactElement } from 'react';
import Head from 'next/head';
import PagesReader from '../lib/ghost/pages';
import { PageProps } from '../types/pages/index';
import TopNav from '../layout/TopNav';
import Footer from '../layout/Footer';

const Home: FC<PageProps> = (props): ReactElement => {
  return (
    <div className="page-wrapper layout-container">
      <Head>
        <title>LivingDecorated</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav navPages={props.navPages} categoryPages={props.categoryPages} />

      <div className="body"></div>
      
      <Footer />
    </div>
  );
}

export async function getServerSideProps () {
  const navPages = await PagesReader.nav();
  const categoryPages = await PagesReader.categories();

  return {
    props: { navPages, categoryPages }
  };
}

export default Home;