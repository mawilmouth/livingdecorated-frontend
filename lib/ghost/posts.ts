import ghost from './';
import { PostType } from '../../types/lib/ghost/posts';
import {
  GhostApiReadParamsType,
  GhostApiBrowseParamsType,
  GhostApiType,
  ReaderType
} from '../../types/lib/ghost';

class PostsReader {
  constructor(ghostApi: GhostApiType) {
    this.api = ghostApi.posts;
  }

  private api: ReaderType;

  async findMany (params: GhostApiBrowseParamsType = {}): Promise<PostType[]> {
    return this.api.browse(params);
  }

  async find (params: GhostApiReadParamsType = {}): Promise<PostType> {
    return this.api.read(params);
  }

  async recent (params: GhostApiBrowseParamsType = {}): Promise<PostType[]> {
    return this.findMany({ order: 'published_at DESC', ...params });
  }

  async findBySlug (slug: string, params: GhostApiReadParamsType = {}): Promise<PostType> {
    return this.find({ ...params, slug });
  }
}

export default new PostsReader(ghost);