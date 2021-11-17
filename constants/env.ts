import { Env, VersionType } from '../types/constants/env';

const env: Env = {
  gaId: process.env.NEXT_PUBLIC_GA_ID!,
  appURL: process.env.APP_URL!,
  ghostURL: process.env.GHOST_URL!,
  ghostContentKey: process.env.GHOST_CONTENT_KEY!,
  ghostVersion: process.env.GHOST_VERSION! as VersionType
};

export default env;