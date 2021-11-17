import type { PostType } from '../../types/lib/ghost/posts';
import type {
  GhostApiReadParamsType,
  GhostApiBrowseParamsType,
  GhostApiType,
  ReaderType
} from '../../types/lib/ghost';
import ghost from './';
import { PostsOrPages } from '@tryghost/content-api';

class PostsReader {
  constructor(ghostApi: GhostApiType) {
    this.api = ghostApi.posts;
  }

  private api: ReaderType;

  async findMany (params: GhostApiBrowseParamsType = {}): Promise<PostsOrPages> {
    return this.api.browse(params);
  }

  async find (params: GhostApiReadParamsType = {}): Promise<PostType> {
    return this.api.read(params);
  }

  async recent (params: GhostApiBrowseParamsType = {}): Promise<PostsOrPages> {
    return this.findMany({ order: 'published_at DESC', ...params });
  }

  async findBySlug (slug: string, params: GhostApiReadParamsType = {}): Promise<PostType> {
    return this.find({ ...params, slug });
  }

  async findManyByCategory (tagSlug: string, params: GhostApiBrowseParamsType = {}): Promise<PostsOrPages> {
    return this.findMany({ ...params, filter: `tag:${tagSlug}` });
  }
}

export default new PostsReader(ghost);