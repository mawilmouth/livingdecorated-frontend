import { FC, ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import PagesReader from '../lib/ghost/pages';
import PostsReader from '../lib/ghost/posts';
import TagsReader from '../lib/ghost/tags';
import { ServerSidePageProps, PageProps } from '../types/pages/index';
import BasicLayout from '../layout/BasicLayout';
import RecentPosts from '../components/home/RecentPosts';
import PostsByCategory from '../components/home/PostsByCategory';
import { getField } from '../helpers';

const Home: FC<PageProps> = (props): ReactElement => {
  const { navPages, recentPosts, categoryPages, categoriesPosts } = props;

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
    <BasicLayout navPages={navPages} categoryPages={categoryPages} >
      <RecentPosts posts={recentPosts} />

      {renderCategories()}
  
      {/* <div className="body">
        <p className="test">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          <a href="#" className="test">hello lexie</a> has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software <a href="#" className="test">hello lexie</a>
          like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </div> */}
    </BasicLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (): Promise<ServerSidePageProps> => {
  const navPages = await PagesReader.nav();
  const categoryPages = await PagesReader.categories();
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

  return {
    props: { navPages, categoryPages, recentPosts, categoriesPosts }
  };
}

export default Home;