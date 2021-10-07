import { FC, ReactElement } from 'react';
import type { GetServerSidePropsContext, GetServerSideProps } from 'next';
import PagesReader from '../lib/ghost/pages';
import { LayoutProps } from '../types/pages/index';
import { PageType } from '../types/lib/ghost/pages';
import BasicLayout from '../layout/BasicLayout';
import GhostPage from '../components/GhostPage';

interface DynamicPageProps extends LayoutProps {
  page: PageType;
}

interface ServerSideProps {
  props: DynamicPageProps;
}

const DynamicPage: FC<DynamicPageProps> = ({ page, navPages, categoryPages }): ReactElement => (
  <BasicLayout navPages={navPages} categoryPages={categoryPages}>
    <GhostPage page={page} />
  </BasicLayout>
);

const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<ServerSideProps> => {
  const navPages: PageType[] = await PagesReader.nav();
  const categoryPages = await PagesReader.categories();
  const page: PageType = await PagesReader.findBySlug(
    ctx.query.slug as string || ''
  );

  return {
    props: { page, navPages, categoryPages }
  };
}

export { getServerSideProps };

export default DynamicPage;