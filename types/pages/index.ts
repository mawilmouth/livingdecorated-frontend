import { SeoType } from '../layout/Seo';
import { PageType } from '../lib/ghost/pages';
import { PostType } from '../lib/ghost/posts';
import { TagType } from '../lib/ghost/tags';

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

