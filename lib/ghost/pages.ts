import ghost from './';
import { PageType } from '../../types/lib/ghost/pages';
import { TagSearch } from './constants';
import {
  GhostApiReadParamsType,
  GhostApiBrowseParamsType,
  GhostApiType,
  ReaderType
} from '../../types/lib/ghost';

class PagesReader {
  constructor(ghostApi: GhostApiType) {
    this.api = ghostApi.pages;
  }

  private api: ReaderType;

  async all (params: GhostApiBrowseParamsType = {}): Promise<PageType[]> {
    return this.api.browse(params);
  }

  async nav (): Promise<PageType[]> {
    return this.api.browse({ filter: TagSearch.Nav })
  }

  async categories (): Promise<PageType[]> {
    return this.api.browse({ filter: TagSearch.Categories })
  }

  async one (params: GhostApiReadParamsType = {}): Promise<PageType> {
    return this.api.read(params);
  }
}

export default new PagesReader(ghost);