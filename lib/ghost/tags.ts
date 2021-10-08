import ghost from './';
import { TagType } from '../../types/lib/ghost/tags';
import { TagSearch } from './constants';
import {
  GhostApiReadParamsType,
  GhostApiBrowseParamsType,
  GhostApiType,
  ReaderType
} from '../../types/lib/ghost';

class TagsReader {
  constructor(ghostApi: GhostApiType) {
    this.api = ghostApi.tags;
  }

  private api: ReaderType;

  async findMany (params: GhostApiBrowseParamsType = {}): Promise<TagType[]> {
    return this.api.browse(params);
  }

  async find (params: GhostApiReadParamsType = {}): Promise<TagType> {
    return this.api.read(params);
  }

  async findBySlug (slug: string, params: GhostApiReadParamsType = {}): Promise<TagType> {
    return this.find({ ...params, slug });
  }

  async all (): Promise<TagType[]> {
    return this.findMany();
  }

  async public (params: GhostApiReadParamsType = {}): Promise<TagType[]> {
    return this.findMany({ filter: TagSearch.Public, ...params });
  }

  async internal (params: GhostApiReadParamsType = {}): Promise<TagType[]> {
    return this.findMany({ filter: TagSearch.Internal, ...params });
  }
}

export default new TagsReader(ghost);