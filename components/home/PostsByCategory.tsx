import { FC, ReactElement } from 'react';
import PostsByCategoryType from '../../types/components/home/PostsByCategory';
import { PostType } from '../../types/lib/ghost/posts';
import PostSneakPeak from './PostSneakPeak';

const MAX_POSTS_TO_RENDER: number = 2;

const PostsByCategory: FC<PostsByCategoryType>  = (props): ReactElement | null => {
  if (props.posts.length < 1) return null;

  const renderPosts = (posts: PostType[]): ReactElement[] => {
    if (posts.length > MAX_POSTS_TO_RENDER) posts.length = MAX_POSTS_TO_RENDER;

    return posts.map((post) => (
      <PostSneakPeak
        post={post}
        category={props.tag}
        key={`post-sneak-peak-${post.id}`}
      />
    ));
  }

  return (
    <div className="row posts-by-category">
      <div className="columns category-title">
        <h2 className="category-title">{props.tag.name}</h2>
      </div>
      {renderPosts(props.posts)}  
    </div>
  );
}

export default PostsByCategory;