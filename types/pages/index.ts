import { PageType } from '../lib/ghost/pages';

export interface LayoutProps {
  navPages: PageType[];
  categoryPages: PageType[];
}

export interface PageProps extends LayoutProps{}

