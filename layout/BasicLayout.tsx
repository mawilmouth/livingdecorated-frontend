import type { FC, ReactElement } from 'react';
import type { PageType } from '../types/lib/ghost/pages';
import type { SeoType } from '../types/lib/ghost/seo';
import TopNav from './TopNav';
import Footer from './Footer';
import HeightBalancer from './HeightBalancer';
import HeadContent from './HeadContent';

interface BasicLayoutProps {
  navPages: PageType[];
  categoryPages: PageType[];
  seoData?: SeoType;
  children?: React.ReactNode;
}

const BasicLayout: FC<BasicLayoutProps> = (props): ReactElement => {
  const { navPages, categoryPages, seoData, children } = props;

  return (
    <div className="page-wrapper layout-container">
      <HeadContent {...seoData} />

      <TopNav categoryPages={categoryPages} navPages={navPages} />

      <HeightBalancer>
        <div className="row expanded">
          <div className="columns small-12 basic-layout-container">
            <div className="row inner-layout-wrapper">
              <div className="columns content-container">{children}</div>
            </div>
          </div>
        </div>
      </HeightBalancer>

      <Footer />
    </div>
  );
};

export default BasicLayout;