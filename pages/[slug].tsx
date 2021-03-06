import type { FC, ReactElement } from 'react';
import type { GetServerSidePropsContext, GetServerSideProps } from 'next';
import type { SeoType } from '../types/lib/ghost/seo';
import type { PageType } from '../types/lib/ghost/pages';
import type { LayoutProps } from '../types/pages/index';
import PagesReader from '../lib/ghost/pages';
import BasicLayout from '../layout/BasicLayout';
import GhostPage from '../components/GhostPage';
import { getPageSettings } from '../helpers/server';
import env from '../constants/env';

interface DynamicPageProps extends LayoutProps {
  page: PageType;
}

interface ServerSideProps {
  props: DynamicPageProps;
}

const DynamicPage: FC<DynamicPageProps> = ({ seoData, page }): ReactElement => (
  <BasicLayout seoData={seoData}>
    <GhostPage page={page} />
  </BasicLayout>
);

const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<ServerSideProps> => {
  const slug: string = ctx.query.slug as string || '' ;
  let page: PageType;

  try {
    page = await PagesReader.findBySlug(slug)
  } catch (e) {
    // @ts-ignore
    return { notFound: true };
  };

  const seoData: SeoType = {
    ...await getPageSettings(),
    ...page,
    og_url: `${env.appURL}/${slug}`
  }; 

  return {
    props: { seoData, page }
  };
}

export { getServerSideProps };

export default DynamicPage;
