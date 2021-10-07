import { FC, ReactElement } from 'react';
import type { GetServerSidePropsContext } from 'next';
import PagesReader from '../../lib/ghost/pages';
import PostsReader from '../../lib/ghost/posts';
import { PageProps } from '../../types/pages/index';
import BasicLayout from '../../layout/BasicLayout';
import { PostType } from '../../types/lib/ghost/posts';
import GhostPost from '../../components/GhostPost';

interface PostsPostProps extends PageProps {
  post: PostType;
}

const Post: FC<PostsPostProps> = ({ post, navPages, categoryPages }): ReactElement => {
  return (
    <BasicLayout navPages={navPages} categoryPages={categoryPages}>
      <GhostPost post={post} />
    </BasicLayout>
  );
}

export async function getServerSideProps (ctx: GetServerSidePropsContext) {
  const navPages = await PagesReader.nav();
  const categoryPages = await PagesReader.categories();
  const post = await PostsReader.findBySlug(
    ctx.query.slug as string || '',
    { include: 'authors' }
  );
  
  return {
    props: { post, navPages, categoryPages }
  };
}

export default Post;