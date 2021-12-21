import type { FC, ReactElement } from 'react';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import type { LayoutProps } from '../../types/pages/index';
import type { PostType } from '../../types/lib/ghost/posts';
import type { SeoType } from '../../types/lib/ghost/seo';
import PagesReader from '../../lib/ghost/pages';
import PostsReader from '../../lib/ghost/posts';
import BasicLayout from '../../layout/BasicLayout';
import GhostPost from '../../components/GhostPost';
import { getPageSettings } from '../../helpers/server';
import env from '../../constants/env';

interface PostsPostProps extends LayoutProps {
  post: PostType;
}

interface ServerSideProps {
  props: PostsPostProps;
}

const Post: FC<PostsPostProps> = ({ seoData, post, navPages, categoryPages }): ReactElement => {
  return (
    <BasicLayout
      seoData={seoData}
      navPages={navPages}
      categoryPages={categoryPages}
    >
      <GhostPost post={post} />
    </BasicLayout>
  );
}

const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<ServerSideProps> => {
  const slug: string = ctx.query.slug as string || '' ;
  const navPages = await PagesReader.nav();
  const categoryPages = await PagesReader.categories();
  let post: PostType;

  try {
    post = await PostsReader.findBySlug(slug, { include: 'authors' })
  } catch (e) {
    // @ts-ignore
    return { notFound: true };
  };

  const seoData: SeoType = {
    ...await getPageSettings(),
    ...post as SeoType,
    description: post.excerpt,
    og_url: `${env.appURL}/posts/${slug}`
  }; 
  
  return {
    props: { seoData, post, navPages, categoryPages }
  };
}

export { getServerSideProps };

export default Post;