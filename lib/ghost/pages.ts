import ghost from './';
import { PageType } from '../../types/lib/ghost/pages';
import { PageSearch } from './constants';
import {
  GhostApiReadParamsType,
  GhostApiBrowseParamsType,
  GhostApiType,
  ReaderType
} from '../../types/lib/ghost';

interface CustomSearchParams {
  includeContent?: boolean;
}

class PagesReader {
  constructor(ghostApi: GhostApiType) {
    this.api = ghostApi.pages;
  }

  private api: ReaderType;

  async findMany (params: GhostApiBrowseParamsType = {}): Promise<PageType[]> {
    return this.api.browse(params);
  }

  async find (params: GhostApiReadParamsType = {}): Promise<PageType> {
    return this.api.read(params);
  }

  async findBySlug (slug: string, params: GhostApiReadParamsType = {}): Promise<PageType> {
    return this.find({ ...params, slug });
  }

  async nav ({ includeContent = false }: CustomSearchParams = {}): Promise<PageType[]> {
    const params = { filter: PageSearch.Nav };

    if (!includeContent) Object.assign(params, { fields: 'id,slug,title' });

    return this.findMany(params)
  }

  async categories ({ includeContent = false }: CustomSearchParams = {}): Promise<PageType[]> {
    const params = { filter: PageSearch.Categories };

    if (!includeContent) Object.assign(params, { fields: 'id,slug,title' });

    return this.findMany(params)
  }
}

export default new PagesReader(ghost);