import { FC, ReactElement } from 'react';
import PagesReader from '../lib/ghost/pages';
import { PageProps } from '../types/pages/index';
import BasicLayout from '../layout/BasicLayout';

const Home: FC<PageProps> = (props): ReactElement => {
  return (
    <BasicLayout navPages={props.navPages} categoryPages={props.categoryPages} >
      <div className="body">
        <p className="test">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          <a href="#" className="test">hello lexie</a> has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software <a href="#" className="test">hello lexie</a>
          like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </div>
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