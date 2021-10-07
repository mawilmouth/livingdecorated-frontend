import { FC, ReactElement } from 'react';
import GhostContent from  './GhostContent';
import { PageType } from '../types/lib/ghost/pages';
import { renderFeatureImage } from '../helpers';

interface GhostPageProps {
  page: PageType;
}

const GhostPage: FC<GhostPageProps> = ({ page }): ReactElement => {
  const { title, html } = page;

  return (
    <div className="ghost-page row">
      <div className="columns">
        <h1 className="title">{title}</h1>
        {renderFeatureImage(page)}
        <GhostContent content={html} />
      </div>
    </div>
  );
}

export default GhostPage;