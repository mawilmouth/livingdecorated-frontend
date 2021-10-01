import { FC, ReactElement, Fragment } from 'react';
import { RecentPostsProps } from '../../types/components/home/RecentPosts';
import FeaturedPost from './FeaturedPost';

const RecentPosts: FC<RecentPostsProps> = (props): ReactElement => {
  function renderPosts (): ReactElement[] {
    return props.posts.map((post, index) => (
      <FeaturedPost {...post} key={`featured-post-${index}`} />
    ));
  }

  return (
    <div className="recent-posts-container">
      <div className="row">
        <div className="columns">
          <h2 className="title">Recent Posts</h2>
        </div>
      </div>
      <div className="wrapper row large-up-4 medium-up-2 small-up-1">
        {renderPosts()}
      </div>
    </div>
  );
}

export default RecentPosts;