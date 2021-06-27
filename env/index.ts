interface Env {
  ghostHost: string;
  ghostContentKey: string;
  ghostContentVersion: string;
}

const env: Env = {
  ghostHost: process.env.GHOST_HOST!,
  ghostContentKey: process.env.GHOST_CONTENT_KEY!,
  ghostContentVersion: process.env.GHOST_CONTENT_VERSION!
};

export default env;