import { SeoType } from "./seo";

export interface SettingsType extends SeoType {
  title: string;
  description: string;
  logo: string;
  icon: string;
  lang: string;
  timezone: string;
  facebook: string;
  twitter: string;
}