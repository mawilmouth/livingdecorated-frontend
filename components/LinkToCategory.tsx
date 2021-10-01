import { FC, ReactElement, ReactNode } from 'react';
import Link from 'next/link';

interface LinkToCategoryProps {
  slug: string;
  className?: string;
  children?: ReactNode[] | ReactNode;
}

const LinkToCategory: FC<LinkToCategoryProps> = ({ slug, className, children }): ReactElement => {
  const linkClass: string = className ? className : '';

  return (
    <Link href={`/posts?category=${slug}`}>
      <a className={linkClass}>{children}</a>
    </Link>
  );
}

export default LinkToCategory;