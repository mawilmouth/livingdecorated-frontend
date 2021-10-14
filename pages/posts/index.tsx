import type { FC, ReactElement } from 'react';
import type { GetServerSidePropsContext, GetServerSideProps } from 'next';
import PagesReader from '../../lib/ghost/pages';
import PostsReader from '../../lib/ghost/posts';
import TagReader from '../../lib/ghost/tags';
import { LayoutProps } from '../../types/pages/index';
import BasicLayout from '../../layout/BasicLayout';
import { PostType } from '../../types/lib/ghost/posts';
import { PageType } from '../../types/lib/ghost/pages';
import FeaturedPost from '../../components/PostPreview';
import { GhostApiBrowseParamsType } from '../../types/lib/ghost';
import { TagType } from '../../types/lib/ghost/tags';
import { SeoType } from '../../types/layout/Seo';
import { getPageSettings } from '../../helpers/server';
import env from '../../constants/env';

interface PostsProps extends LayoutProps {
  posts: PostType[];
  category?: TagType | null;
}

interface ServerSideProps {
  props: PostsProps;
}

const Posts: FC<PostsProps> = (props): ReactElement => {
  const { seoData, posts, category, navPages, categoryPages } = props;

  function renderPosts (): ReactElement[] {
    return posts.map((post: PostType, index: number) => (
      <FeaturedPost {...post} showInfo={true} key={`post-${index}`} />
    ));
  }

  const pageTitle: string = category ? category.name : 'all posts';

  return (
    <div className="posts-index">
      <BasicLayout
        seoData={seoData}
        navPages={navPages}
        categoryPages={categoryPages}
      >
        <div className="row">
          <div className="columns">
            <h1 className="page-title">{pageTitle}</h1>
          </div>
        </div>
        <div className="posts-wrapper row large-up-3 medium-up-2 small-up-1">
          {renderPosts()}
        </div>
      </BasicLayout>
    </div>
  );
}

const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<ServerSideProps> => {
  const navPages: PageType[] = await PagesReader.nav();
  const categoryPages: PageType[] = await PagesReader.categories();
  const categorySlug: string = ctx.query.category as string || '';
  const postsParams: GhostApiBrowseParamsType = {
    order: 'published_at DESC',
    include: 'authors'
  };

  const findAllPosts = async (): Promise<PostType[]> => (
    PostsReader.findMany(postsParams)
  );

  let posts: PostType[] = [];
  let category: TagType | null = null;

  if (!categorySlug.length) {
    posts = await findAllPosts();
  } else {
    try {
      category = await TagReader.findBySlug(categorySlug, {
        fields: 'id,slug,name'
      });

      posts = await PostsReader.findManyByCategory(categorySlug, postsParams);
    } catch (ex) {
      posts = await findAllPosts();
    }
  }

  let ogUrl: string = `${env.appURL}/posts`;
  
  if (category) ogUrl = `${ogUrl}?category=${categorySlug}`;

  const seoData: SeoType = {
    ...await getPageSettings(),
    og_url: ogUrl
  }; 

  return {
    props: { seoData, posts, category, navPages, categoryPages }
  };
}

export { getServerSideProps };

export default Posts;