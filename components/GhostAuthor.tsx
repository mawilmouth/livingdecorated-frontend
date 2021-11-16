import { FC, ReactElement } from 'react';
import { AuthorType } from '../types/lib/ghost/authors';

interface GhostAuthorProps {
  author: AuthorType;
}

const DEFAULT_AUTHOR_IMG: string = '/images/user-default-image.png';

const GhostAuthor: FC<GhostAuthorProps> = (props): ReactElement => {
  const { profile_image: profileImage, name } = props.author;
  const imageSrc: string = profileImage || DEFAULT_AUTHOR_IMG;

  return (
    <div className="ghost-author">
      <img className="profile-image" src={imageSrc} alt={name} />
      <p className="name">{name}</p>
    </div>
  );
};

export default GhostAuthor;