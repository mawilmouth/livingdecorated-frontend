import { Env } from '../types/constants/env';

const env: Env = {
  ghostUrl: process.env.GHOST_URL,
  ghostVersion: process.env.GHOST_VERSION,
  ghostContentKey: process.env.GHOST_CONTENT_KEY
} as Env;

export default env;