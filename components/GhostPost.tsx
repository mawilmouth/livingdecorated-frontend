import type { FC, ReactElement } from 'react';
import type { PostType } from '../types/lib/ghost/posts';
import { renderFeatureImage } from '../helpers';
import GhostContent from  './GhostContent';
import PostInfo from './PostInfo';

interface GhostPostProps {
  post: PostType;
}

const GhostPost: FC<GhostPostProps> = ({ post }): ReactElement => {
  const { title, excerpt, html } = post;

  return (
    <div className="ghost-post row">
      <div className="columns">
        {renderFeatureImage(post)}
        <h1 className="title">{title}</h1>
        <p className="excerpt">{excerpt}</p>
        <PostInfo {...post} />
        <GhostContent content={html as string} />
      </div>
    </div>
  );
}

export default GhostPost;