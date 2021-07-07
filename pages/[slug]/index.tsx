import { FC, ReactElement } from 'react';
import Head from 'next/head';
import PagesReader from '../../lib/ghost/pages';
import { PageProps } from '../../types/pages/index';
import TopNav from '../../layout/TopNav';
import { PageType } from '../../types/lib/ghost/pages';

const Page: FC<PageProps> = (props): ReactElement => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>LivingDecorated</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav navPages={props.navPages} categoryPages={props.categoryPages} />

      custom page
    </div>
  );
}

export async function getServerSideProps () {
  const navPages: PageType[] = await PagesReader.nav();
  const categoryPages = await PagesReader.categories();

  return {
    props: { navPages, categoryPages }
  };
}

export default Page;