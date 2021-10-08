import { FC, ReactElement } from 'react';
import PagesReader from '../../lib/ghost/pages';
import PostsReader from '../../lib/ghost/posts';
import { PageProps } from '../../types/pages/index';
import BasicLayout from '../../layout/BasicLayout';
import { PostType } from '../../types/lib/ghost/posts';
import { PageType } from '../../types/lib/ghost/pages';
import FeaturedPost from '../../components/PostPreview';

interface PostsProps extends PageProps {
  posts: PostType[];
}

const Posts: FC<PostsProps> = ({ posts, navPages, categoryPages }): ReactElement => {
  function renderPosts (): ReactElement[] {
    return posts.map((post: PostType, index: number) => (
      <FeaturedPost {...post} showInfo={true} key={`post-${index}`} />
    ));
  }

  return (
    <div className="posts-index">
      <BasicLayout navPages={navPages} categoryPages={categoryPages}>
        <div className="row">
          <div className="columns">
            <h1 className="page-title">all posts</h1>
          </div>
        </div>
        <div className="posts-wrapper row large-up-3 medium-up-2 small-up-1">
          {renderPosts()}
        </div>
      </BasicLayout>
    </div>
  );
}

export async function getServerSideProps () {
  const navPages: PageType[] = await PagesReader.nav();
  const categoryPages: PageType[] = await PagesReader.categories();
  const posts: PostType[] = await PostsReader.findMany({
    order: 'published_at DESC',
    include: 'authors'
  });

  return {
    props: { posts, navPages, categoryPages }
  };
}

export default Posts;