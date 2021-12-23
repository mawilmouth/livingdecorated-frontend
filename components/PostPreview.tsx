import type { FC, ReactElement } from 'react';
import type { PostType } from '../types/lib/ghost/posts';
import ScalableImage from './ScalableImage';
import LinkToPost from './LinkToPost';
import PostInfo from './PostInfo';

interface PostPreviewProps extends PostType {
  showInfo?: boolean;
}

const PostPreview: FC<PostPreviewProps> = (props): ReactElement => {
  const { title, slug, feature_image: featureImage, showInfo = false } = props;

  function renderInfo (): ReactElement | null {
    return showInfo ? <PostInfo relativeTime={true} {...props} /> : null;
  }

  return (
    <div className="post-preview-container columns">
      <LinkToPost slug={slug}>
        <ScalableImage src={featureImage || ''} alt={title} />
        <p className="title">{title}</p>
        {renderInfo()}
      </LinkToPost>
    </div>
  );
}

export default PostPreview;
