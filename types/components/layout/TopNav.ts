import { PageType } from "../../lib/ghost/pages";
import { DataType as SocialMediaDataType } from '../../../staticData/socialMediaData';

export interface TopNavProps {
  navPages: PageType[];
  categoryPages: PageType[];
}

export interface SocialMediaLinksProps {
  hrefs: SocialMediaDataType;
}