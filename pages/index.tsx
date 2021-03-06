import type { FC, ReactElement } from 'react';
import type { GetServerSideProps } from 'next';
import type { ServerSidePageProps, PageProps } from '../types/pages/index';
import type { SeoType } from '../types/lib/ghost/seo';
import PostsReader from '../lib/ghost/posts';
import TagsReader from '../lib/ghost/tags';
import BasicLayout from '../layout/BasicLayout';
import RecentPosts from '../components/home/RecentPosts';
import PostsByCategory from '../components/home/PostsByCategory';
import { getField } from '../helpers';
import { getPageSettings } from '../helpers/server';
import env from '../constants/env';

const Home: FC<PageProps> = (props): ReactElement => {
  const { recentPosts, categoriesPosts, seoData } = props;

  function renderCategories (): ReactElement[] {
    return categoriesPosts.map(({ category, posts }, index) => (
      <PostsByCategory
        posts={posts}
        tag={category}
        key={`category-posts-${index}`}
      />
    ));
  }

  return (
    <BasicLayout seoData={seoData}>
      <RecentPosts posts={recentPosts} />
      {renderCategories()}
    </BasicLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (): Promise<ServerSidePageProps> => {
  const categories = await TagsReader.public({ fields: 'id,slug,name' });
  const recentPosts = await PostsReader.recent({
    limit: 4, fields: 'id,slug,title,feature_image'
  });

  let categoriesPosts = [];
  let excludePostsIds: string[] = getField('id', recentPosts);

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const posts = await PostsReader.findMany({
      limit: 1,
      include: 'tags',
      formats: 'plaintext,html',
      fields: 'id,slug,title,feature_image,excerpt',
      filter: `tag:${categories[i].slug}+id:-[${excludePostsIds}]`
    });

    if (posts.length) {
      const postIds: string[] = getField('id', posts);

      excludePostsIds.concat(postIds);
      categoriesPosts.push({ category, posts });
    }
  }

  const seoData: SeoType = {
    ...await getPageSettings(),
    title: 'Home | LivingDecorated',
    og_url: env.appURL
  }; 

  return {
    props: { seoData, recentPosts, categoriesPosts }
  };
}

export default Home;
