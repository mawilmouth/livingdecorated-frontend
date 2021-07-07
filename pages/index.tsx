import { FC, ReactElement } from 'react';
import PagesReader from '../lib/ghost/pages';
import { PageProps } from '../types/pages/index';
import BasicLayout from '../layout/BasicLayout';

const Home: FC<PageProps> = (props): ReactElement => {
  return (
    <BasicLayout navPages={props.navPages} categoryPages={props.categoryPages} >
      <div className="body"></div>
    </BasicLayout>
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