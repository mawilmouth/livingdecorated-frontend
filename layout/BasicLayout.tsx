import { FC, ReactElement } from 'react';
import Head from 'next/head';
import { BasicLayoutProps } from '../types/layout/BasicLayout';
import TopNav from './TopNav';
import Footer from './Footer';

const BasicLayout: FC<BasicLayoutProps> = (props: BasicLayoutProps): ReactElement => {

  return (
    <div className="page-wrapper layout-container">
      <Head>
        <title>LivingDecorated</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav categoryPages={props.categoryPages} navPages={props.navPages} />

      <div className="row expanded">
        <div className="columns small-12 basic-layout-container">
          <div className="row inner-layout-wrapper">
            <div className="columns content-container">{props.children}</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BasicLayout;