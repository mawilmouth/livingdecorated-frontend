import type { FC, ReactElement } from 'react';
import type { Dayjs } from 'dayjs';
import type { PostType } from '../types/lib/ghost/posts';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import GhostAuthor from './GhostAuthor';

dayjs.extend(relativeTime);

interface PostInfoProps extends PostType {
  relativeTime?: boolean;
}

const PostInfo: FC<PostInfoProps> = (props): ReactElement => {
  const {
    reading_time: readingTime,
    published_at: publishedAt,
    primary_author: primaryAuthor,
    relativeTime = false
  } = props;


  const readTime: string = `${readingTime || 5} min read`;

  function renderDate (): ReactElement | null {
    if (!publishedAt?.length) return null;

    const date: Dayjs = dayjs(publishedAt);
    const dateString: string = relativeTime ?
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
