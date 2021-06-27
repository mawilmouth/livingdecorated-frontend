import GhostApi from '@tryghost/content-api';
import env from '../../env';

const ghost = new GhostApi({
  host: env.ghostHost,
  key: env.ghostContentKey,
  version: env.ghostContentVersion,
});

export default ghost;