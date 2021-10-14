export interface ReaderType {
  browse: (params: any) => any;
  read: (params: any) => any;
}

export interface SettingsReaderType {
  browse: () => any;
}

export interface GhostApiType {
  pages: ReaderType;
  posts: ReaderType;
  tags: ReaderType;
  authors: ReaderType;
  settings: SettingsReaderType;
};

export interface GhostApiReadParamsType {
  slug?: string;
  include?: string;
  fields?: string;
  formats?: string;
}

export interface GhostApiBrowseParamsType extends GhostApiReadParamsType {
  filter?: string;
  limit?: number | string;
  page?: number;
  order?: string;
  fields?: string;
}