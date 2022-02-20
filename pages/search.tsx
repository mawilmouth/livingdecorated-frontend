import type { FC, ReactElement } from 'react';
import type { GetServerSideProps } from 'next';
import type { SeoType } from '../types/lib/ghost/seo';
import type { LayoutProps } from '../types/pages/index';
import type { PostType } from '../types/lib/ghost/posts';
import type { PageType } from '../types/lib/ghost/pages';
import type { GhostApiBrowseParamsType } from '../types/lib/ghost';
import type { PostsOrPages, Pagination } from '@tryghost/content-api';
import { useState } from 'react';
import SearchReader from '../lib/search';
import PagesReader from '../lib/ghost/pages';
import PostsReader from '../lib/ghost/posts';
import BasicLayout from '../layout/BasicLayout';
import FeaturedPost from '../components/PostPreview';
import SearchBar from '../components/search/SearchBar';
import SearchInfo from '../components/search/SearchInfo';
import { getPageSettings } from '../helpers/server';
import env from '../constants/env';

interface SearchProps extends LayoutProps {
  posts: PostType[];
  searchUrl: string;
}

interface ServerSideProps {
  props: SearchProps;
}

const Search: FC<SearchProps> = (props): ReactElement => {
  const { seoData, navPages, categoryPages, searchUrl } = props;
  const [posts, setPosts] = useState<PostType[]>(props.posts);
  const [query, setQuery] = useState<string>('');
  const isValidQuery: boolean = !!query.length;

  const renderPosts = (): ReactElement[] => {
    const postsToRender: PostType[] = !!posts.length ? posts : props.posts;
    return postsToRender.map((post: PostType, index: number) => (
      <FeaturedPost {...post} key={`post-${index}`} />
    ));
  }

  const fetchPosts = async (q: string): Promise<PostType[]> => (
    new SearchReader({ url: searchUrl }).findMany({
      q,
      fields: 'slug,title,feature_image'
    })
  );

  const handleSearch = (q: string): void => {
    if (q === query) return;

    if (!q.length) {
      setQuery('_');
      setPosts([]);
      return;
    }

    fetchPosts(q).then((data) => {
      setQuery(q);
      setPosts(data);
    });
  }

  return (
    <div className="posts-index">
      <BasicLayout
        seoData={seoData}
        navPages={navPages}
        categoryPages={categoryPages}
      >
        <div className="row">
          <div className="columns">
            <h1 className="page-title">search all posts</h1>
          </div>
          <div className="columns small-12">
            <SearchBar handleSubmit={handleSearch} />
          </div>
        </div>
        <div className="row">
          <div className="columns">
            {isValidQuery && <SearchInfo query={query} results={posts} /> }
          </div>
        </div>
        <div className="posts-wrapper row large-up-3 medium-up-2 small-up-1">
          {renderPosts()}
        </div>
      </BasicLayout>
    </div>
  );
}

const getServerSideProps: GetServerSideProps = async (): Promise<ServerSideProps> => {
  const navPages: PageType[] = await PagesReader.nav();
  const categoryPages: PageType[] = await PagesReader.categories();
  const postsParams: GhostApiBrowseParamsType = {
    order: 'published_at DESC'
  };

  const findAllPosts = async (params = postsParams): Promise<PostsOrPages> => (
    PostsReader.findMany(params)
  );

  let posts: PostsOrPages = await findAllPosts();
  const ogUrl: string = `${env.appURL}/posts`;
  
  const seoData: SeoType = {
    ...await getPageSettings(),
    og_url: ogUrl
  }; 

  const pagination: Pagination = posts?.meta?.pagination;

  if (pagination) {
    const totalPages: number = pagination.pages;
    let nextPage: number = pagination.page + 1;

    while (nextPage <= totalPages) {
      const params = { ...postsParams, page: nextPage };
      const pagePosts: PostsOrPages = await findAllPosts(params);

      pagePosts.forEach(post => posts[posts.length] = post);

      nextPage++;
    }
  }

  return {
    props: {
      seoData,
      posts,
      navPages,
      categoryPages,
      searchUrl: env.searchUrl
    }
  };
}

export { getServerSideProps };

export default Search;
