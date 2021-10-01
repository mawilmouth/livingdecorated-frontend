export interface TagType {
  id: string;
  name: string;
  slug: string;
  description?: string;
  feature_image: string;
  visibility: string; // 'internal' || 'public'
  og_title: string;
  og_image: string;
  og_description: string;
  twitter_title: string;
  twitter_image: string;
  twitter_description: string;
  meta_title: string;
  meta_description: string;
}