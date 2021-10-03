import { FC, ReactElement, ReactNode } from 'react';
import Link from 'next/link';

interface LinkToPageProps {
  slug: string;
  className?: string;
  children?: ReactNode[] | ReactNode;
}

const LinkToPage: FC<LinkToPageProps> = ({ slug, className, children }): ReactElement => {
  const linkClass: string = className ? className : '';

  return (
    <Link href="/[slug]" as={`/${slug}`}>
      <a className={linkClass}>{children}</a>
    </Link>
  );
}

export default LinkToPage;