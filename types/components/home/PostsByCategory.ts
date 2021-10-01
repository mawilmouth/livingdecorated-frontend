import { PostType } from '../../lib/ghost/posts';
import { TagType } from '../../lib/ghost/tags';

export default interface PostsByCategoryType {
  tag: TagType;
  posts: PostType[];
}