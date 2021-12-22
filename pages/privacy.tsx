import type { FC, ReactElement } from 'react';
import type { GetServerSidePropsContext, GetServerSideProps, GetServerSidePropsResult } from 'next';
import type { SeoType } from '../types/lib/ghost/seo';
import type { PageType } from '../types/lib/ghost/pages';
import type { LayoutProps } from '../types/pages/index';
import PagesReader from '../lib/ghost/pages';
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

const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<LayoutProps>> => {
  const navPages: PageType[] = await PagesReader.nav();
  const categoryPages = await PagesReader.categories();

  const seoData: SeoType = {
    ...await getPageSettings(),
    og_url: `${env.appURL}/privacy`
  }; 

  return {
    props: {
      seoData,
      navPages,
      categoryPages
    }
  };
}

export { getServerSideProps };

export default Privacy;
