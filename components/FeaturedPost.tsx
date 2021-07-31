import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { FeaturedPostProps } from '../types/components/FeaturedPost';

const FeaturedPost: FC<FeaturedPostProps> = (props): ReactElement => {
  const { title, slug, feature_image: featureImage } = props;

  return (
    <Link href="/posts/[slug]" as={`/posts/${slug}`}>
      <a className="featured-post-container columns">
        <div className="image-wrapper">
          <img className="image" src={featureImage} alt={title} />
        </div>
        <p className="title">{title}</p>
      </a>
    </Link>
  );
}

export default FeaturedPost;