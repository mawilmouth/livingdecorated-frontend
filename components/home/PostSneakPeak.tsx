import { FC, ReactElement } from 'react';
import PostSneakPeakProps from '../../types/components/home/PostSneakPeak';
import ScalableImage from '../ScalableImage';
import LinkToPost from '../LinkToPost';
import LinkToCategory from '../LinkToCategory';
import { trimString } from '../../helpers';

const PostSneakPeak: FC<PostSneakPeakProps> = ({ post, category }): ReactElement => {
  const trimmedExcerpt: string = post.excerpt ? trimString(post.excerpt, 255, '...') : '';

  return (
    <div className="columns-12 post-sneak-peak">
      <div className="row">
        <div className="columns small-12 medium-6 large-4">
          <LinkToPost slug={post.slug}>
            <ScalableImage src={post.feature_image || ''} alt={post.title} />
          </LinkToPost>
        </div>
        <div className="columns">
          <h3 className="title">
            <LinkToPost slug={post.slug}>{post.title}</LinkToPost>
          </h3>
          <p className="excerpt">{trimmedExcerpt}</p>
          <div className="button-group">
            <LinkToPost className="button secondary" slug={post.slug}>
              read on
            </LinkToPost>
            <LinkToCategory className="button secondary" slug={category.slug}>
              view similar
            </LinkToCategory>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSneakPeak;