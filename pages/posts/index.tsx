import { FC, ReactElement } from 'react';
import Head from 'next/head';
import PagesReader from '../../lib/ghost/pages';
import { PageProps } from '../../types/pages/index';
import TopNav from '../../layout/TopNav';

const Posts: FC<PageProps> = (props): ReactElement => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>LivingDecorated</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav navPages={props.navPages} categoryPages={props.categoryPages} />

      posts index
    </div>
  );
}

export async function getServerSideProps () {
  const navPages = await PagesReader.nav();
  const categoryPages = await PagesReader.categories();

  // Use page params for searching by tag??

  return {
    props: { navPages, categoryPages }
  };
}

export default Posts;