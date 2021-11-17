import type { SeoType } from '../lib/ghost/seo';
import type { PageType } from '../lib/ghost/pages';
import type { PostType } from '../lib/ghost/posts';
import type { TagType } from '../lib/ghost/tags';

export interface LayoutProps {
  navPages: PageType[];
  categoryPages: PageType[];
  seoData: SeoType;
}

export interface PageProps extends LayoutProps {
  recentPosts: PostType[];
  categoriesPosts: {
    category: TagType;
    posts: PostType[];
  }[];
}

export interface ServerSidePageProps {
  props: PageProps;
}

