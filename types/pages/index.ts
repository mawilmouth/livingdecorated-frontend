import type { SeoType } from '../lib/ghost/seo';
import type { PostType } from '../lib/ghost/posts';
import type { TagType } from '../lib/ghost/tags';

export interface LayoutProps {
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

