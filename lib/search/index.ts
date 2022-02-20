import axios from 'axios';
import * as Sentry from '@sentry/nextjs';
import type { AxiosResponse } from 'axios';
import type { PostsOrPages, Pagination } from '@tryghost/content-api';
import env from '../../constants/env';

export interface SearchParamsType {
  q: string;
  fields?: string;
};

interface ApiType {
  search: (params: SearchParamsType) => Promise<PostsOrPages>;
};

export interface SearchSettingsType {
  url?: string;
};

class Search {
  constructor(settings: SearchSettingsType) {
    this.url = settings.url || env.searchUrl;
  }
  
  findMany = async (params: SearchParamsType): Promise<PostsOrPages> => {
    return this.api.search(params);
  }

  _endpoint = (): ApiType => {
    return { search: this._search };
  }

  _search = async (params: SearchParamsType): Promise<PostsOrPages> => {
    let posts = [];

    try {
      const { data }: AxiosResponse = await axios.get(this.url, { params });
      posts = data;
    } catch (err) {
      Sentry.captureException(err);
      console.error(err);
      posts = [];
    }

    return Object.assign([...posts], {
      meta: { pagination: this._defaultSearchPagination() }
    });
  }

  _defaultSearchPagination (): Pagination {
    return {
      page: 1,
      limit: 1,
      pages: 1,
      total: 1,
      next: null,
      prev: null
    };
  }

  private api: ApiType = this._endpoint();
  private url: string;
}

export default Search;
