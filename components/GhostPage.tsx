import type { FC, ReactElement } from 'react';
import type { PageType } from '../types/lib/ghost/pages';
import GhostContent from  './GhostContent';
import { renderFeatureImage } from '../helpers';

interface GhostPageProps {
  page: PageType;
  className?: string;
}

const GhostPage: FC<GhostPageProps> = ({ page, className }): ReactElement => {
  const { title, html } = page;
  const containerClassName: string = className ? ` ${className}` : ''

  return (
    <div className={`ghost-page row${containerClassName}`}>
      <div className="columns">
        {renderFeatureImage(page)}
        <h1 className="title">{title}</h1>
        <GhostContent content={html} />
      </div>
    </div>
  );
}

export default GhostPage;