import { FC, ReactElement } from 'react';
import ReactHtmlParser from 'react-html-parser';

interface GhostContentProps {
  content: string;
}

const GhostContent: FC<GhostContentProps> = ({ content }): ReactElement => (
  <div className="ghost-content">{ReactHtmlParser(content)}</div>
);

export default GhostContent;