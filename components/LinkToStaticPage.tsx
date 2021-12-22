import type { FC, ReactElement, ReactNode } from 'react';
import Link from 'next/link';

interface LinkToStaticPageProps {
  path: string;
  className?: string;
  children?: ReactNode[] | ReactNode;
}

const LinkToStaticPage: FC<LinkToStaticPageProps> = ({
  path, className, children
}): ReactElement => (
  <Link href={path}>
    <a className={className || ''}>{children}</a>
  </Link>
);

export default LinkToStaticPage;
