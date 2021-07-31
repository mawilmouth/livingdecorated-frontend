import { PageType } from '../lib/ghost/pages';
import { PostType } from '../lib/ghost/posts';

export interface LayoutProps {
  navPages: PageType[];
  categoryPages: PageType[];
}

export interface PageProps extends LayoutProps {
  recentPosts: PostType[];
}

