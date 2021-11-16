import type { FC, ReactElement } from 'react';
import type { PostType } from '../types/lib/ghost/posts';
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
        <h1 className="title">{title}</h1>
        <p className="excerpt">{excerpt}</p>
        <PostInfo {...post} />
        <GhostContent content={html} />
      </div>
    </div>
  );
}

export default GhostPost;