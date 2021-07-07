import { FC, ReactElement } from 'react';
import Head from 'next/head';
import { BasicLayoutProps } from '../types/layout/BasicLayout';
import TopNav from './TopNav';
import Footer from './Footer';
import Header from './Header';

const BasicLayout: FC<BasicLayoutProps> = (props: BasicLayoutProps): ReactElement => {

  return (
    <div className="page-wrapper layout-container">
      <Head>
        <title>LivingDecorated</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav categoryPages={props.categoryPages} navPages={props.navPages} />

      <div className="row expanded">
        <div className="columns small-12">
          <div className="row inner-layout-wrapper">
            <div className="columns small-12">
              <Header />
            </div>
            <div className={`columns content-container ${props.contentContainerClass}`}>{props.children}</div>
            { props.renderSidebar && <div className="columns small-4"></div> }
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BasicLayout;