import { ReactElement } from "react";
import { PageType } from "../types/lib/ghost/pages";
import { PostType } from "../types/lib/ghost/posts";

export default function renderFeatureImage (data: PageType | PostType): ReactElement | null {
  const { title, feature_image: featureImage } = data;

  return featureImage ? <img src={featureImage} alt={title} /> : null;
}