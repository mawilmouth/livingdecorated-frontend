import { FC, ReactElement } from 'react';
import moment, { Moment } from 'moment';
import GhostAuthor from './GhostAuthor';
import { PostType } from '../types/lib/ghost/posts';

interface PostInfoProps extends PostType {
  dateAsAgo?: boolean;
}

const PostInfo: FC<PostInfoProps> = (props): ReactElement => {
  const {
    reading_time: readingTime,
    published_at: publishedAt,
    primary_author: primaryAuthor,
    dateAsAgo = false
  } = props;


  const readTime: string = `${readingTime || 5} min read`;

  function renderDate (): ReactElement | null {
    if (!publishedAt?.length) return null;

    const date: Moment = moment(publishedAt);
    const dateString: string = dateAsAgo ?
      date.fromNow() :
      date.format('MMM DD, YYYY');

    return (
      <p className="published-date">{dateString}</p>
    );
  }

  function renderAuthor (): ReactElement | null {
    return primaryAuthor ? <GhostAuthor author={primaryAuthor} /> : null;
  }


  return (
    <div className="post-info">
      {renderAuthor()}
      {renderDate()}
      <p className="read-time">{readTime}</p>
    </div>
  );
}

export default PostInfo;