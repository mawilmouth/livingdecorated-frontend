import { SeoType } from './seo';

export interface PageType extends SeoType {
  id: string;
  uuid: string;
  excerpt: string;
  html: string;
  slug: string;
  title: string;
  reading_time: number;
  feature_image: string;
  featured: boolean;
  page: boolean;
  url: string;
  visibility: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}