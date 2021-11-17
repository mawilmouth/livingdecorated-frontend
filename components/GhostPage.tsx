import type { FC, ReactElement } from 'react';
import type { PageType } from '../types/lib/ghost/pages';
import GhostContent from  './GhostContent';
import { renderFeatureImage } from '../helpers';

interface GhostPageProps {
  page: PageType;
}

const GhostPage: FC<GhostPageProps> = ({ page }): ReactElement => {
  const { title, html } = page;

  return (
    <div className="ghost-page row">
      <div className="columns">
        {renderFeatureImage(page)}
        <h1 className="title">{title}</h1>
        <GhostContent content={html} />
      </div>
    </div>
  );
}

export default GhostPage;