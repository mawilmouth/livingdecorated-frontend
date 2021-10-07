import { FC, ReactElement } from 'react';
import { AuthorType } from '../types/lib/ghost/authors';

interface GhostAuthorProps {
  author: AuthorType;
}

const GhostAuthor: FC<GhostAuthorProps> = ({ author }): ReactElement => (
  <div className="ghost-author">
    <img className="profile-image" src={author.profile_image} alt={author.name} />
    <p className="name">{author.name}</p>
  </div>
);

export default GhostAuthor;