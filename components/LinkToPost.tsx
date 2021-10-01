import { FC, ReactElement, ReactNode } from 'react';
import Link from 'next/link';

interface LinkToPostProps {
  slug: string;
  className?: string;
  children?: ReactNode[] | ReactNode;
}

const LinkToPost: FC<LinkToPostProps> = ({ slug, className, children }): ReactElement => {
  const linkClass: string = className ? className : '';

  return (
    <Link href="/posts/[slug]" as={`/posts/${slug}`}>
      <a className={linkClass}>{children}</a>
    </Link>
  );
}

export default LinkToPost;