import { Metadata, Settings, SocialMedia } from "@tryghost/content-api";

export interface SeoType extends SocialMedia, Metadata, Settings {
  keywords?: string[];
  og_url?: string;
};
