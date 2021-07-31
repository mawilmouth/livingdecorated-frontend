import { FC, ReactElement } from 'react';
import { RecentPostsProps } from '../types/components/RecentPosts';
import FeaturedPost from './FeaturedPost';

const RecentPosts: FC<RecentPostsProps> = (props): ReactElement => {
  function renderPosts (): ReactElement[] {
    return props.posts.map((post, index) => (
      <FeaturedPost {...post} key={`featured-post-${index}`} />
    ));
  }

  return (
    <div className="recent-posts-container row large-up-4 medium-up-2 small-up-1">
      {renderPosts()}
    </div>
  );
}

export default RecentPosts;