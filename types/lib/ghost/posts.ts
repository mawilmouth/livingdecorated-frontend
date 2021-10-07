import { AuthorType } from "./authors";
import { PageType } from "./pages";

export interface PostType extends PageType {
  primary_author?: AuthorType;
  authors?: AuthorType[];
}