import type { FC, ReactElement } from 'react';
import type { GetServerSideProps, GetServerSidePropsResult } from 'next';
import type { SeoType } from '../types/lib/ghost/seo';
import type { PageType } from '../types/lib/ghost/pages';
import type { LayoutProps } from '../types/pages/index';
import BasicLayout from '../layout/BasicLayout';
import GhostPage from '../components/GhostPage';
import { getPageSettings } from '../helpers/server';
import env from '../constants/env';
import privacyPageContent from '../staticData/privacyPage';

const Privacy: FC<LayoutProps> = (props): ReactElement => {
  const page: PageType = privacyPageContent;

  return (
    <BasicLayout {...props}>
      <GhostPage page={page} className="privacy-page" />
    </BasicLayout>
  );
};

const getServerSideProps: GetServerSideProps = async (): Promise<GetServerSidePropsResult<LayoutProps>> => {
  const seoData: SeoType = {
    ...await getPageSettings(),
    title: 'Privacy | LivingDecorated',
    og_url: `${env.appURL}/privacy`
  }; 

  return {
    props: { seoData }
  };
}

export { getServerSideProps };

export default Privacy;
