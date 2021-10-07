import { FC, ReactElement } from 'react';
import GhostContent from  './GhostContent';
import GhostAuthor from  './GhostAuthor';
import { PostType } from '../types/lib/ghost/posts';
import moment, { Moment } from 'moment';

interface GhostPostProps {
  post: PostType;
}

const GhostPost: FC<GhostPostProps> = (props): ReactElement => {
  const {
    title,
    excerpt,
    html,
    primary_author: primaryAuthor,
    reading_time: readingTime,
    published_at: publishedAt,
    feature_image: featureImage
  } = props.post;

  const readTime: string = `- ${readingTime || 5} minute read -`;

  function renderDate (): ReactElement | null {
    if (!publishedAt.length) return null;

    const date: Moment = moment(publishedAt);
    const dateString: string = date.format('MMM DD, YYYY');

    return (
      <p className="published-date">{dateString}</p>
    );
  }

  function renderAuthor (): ReactElement | null {
    return primaryAuthor ? <GhostAuthor author={primaryAuthor} /> : null;
  }

  return (
    <div className="ghost-post row">
      <div className="columns">
        <h1 className="title">{title}</h1>
        <p className="excerpt">{excerpt}</p>
        <div className="post-info">
          {renderAuthor()}
          {renderDate()}
          <p className="read-time">{readTime}</p>
        </div>
        <img src={featureImage} alt={title} />
        <GhostContent content={html} />
      </div>
    </div>
  );
}

export default GhostPost;