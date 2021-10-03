import { FC, ReactElement, ReactNode } from 'react';
import Link from 'next/link';

interface LinkToPostsProps {
  className?: string;
  children?: ReactNode[] | ReactNode;
}

const LinkToPosts: FC<LinkToPostsProps> = ({ className, children }): ReactElement => {
  const linkClass: string = className ? className : '';

  return (
    <Link href="/posts">
      <a className={linkClass}>{children}</a>
    </Link>
  );
};

export default LinkToPosts;