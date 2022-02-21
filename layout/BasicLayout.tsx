import type { FC, ReactElement } from 'react';
import type { SeoType } from '../types/lib/ghost/seo';
import TopNav from './TopNav';
import Footer from './Footer';
import HeightBalancer from './HeightBalancer';
import HeadContent from './HeadContent';

interface BasicLayoutProps {
  seoData?: SeoType;
  children?: React.ReactNode;
}

const BasicLayout: FC<BasicLayoutProps> = (props): ReactElement => (
  <div className="page-wrapper layout-container">
    <HeadContent {...props.seoData} />
    <TopNav />
    <HeightBalancer>
      <div className="row expanded">
        <div className="columns small-12 basic-layout-container">
          <div className="row inner-layout-wrapper">
            <div className="columns content-container">{props.children}</div>
          </div>
        </div>
      </div>
    </HeightBalancer>
    <Footer />
  </div>
);

export default BasicLayout;
