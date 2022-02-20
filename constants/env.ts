type VersionType = "v2" | "v3" | "canary";

interface Env {
  gaId: string;
  appURL: string;
  ghostURL: string;
  ghostContentKey: string;
  ghostVersion: VersionType;
  searchUrl: string;
};

const env: Env = {
  gaId: process.env.NEXT_PUBLIC_GA_ID!,
  appURL: process.env.APP_URL!,
  ghostURL: process.env.GHOST_URL!,
  ghostContentKey: process.env.GHOST_CONTENT_KEY!,
  ghostVersion: process.env.GHOST_VERSION! as VersionType,
  searchUrl: process.env.SEARCH_URL!
};

export default env;