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
  ghostURL: process.env.NEXT_PUBLIC_GHOST_URL!,
  ghostContentKey: process.env.NEXT_PUBLIC_GHOST_CONTENT_KEY!,
  ghostVersion: process.env.NEXT_PUBLIC_GHOST_VERSION! as VersionType,
  searchUrl: process.env.NEXT_PUBLIC_SEARCH_URL!
};

export default env;
