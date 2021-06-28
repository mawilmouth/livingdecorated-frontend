import GhostApi from '@tryghost/content-api';
import env from '../../constants/env';
import { GhostApiType } from '../../types/lib/ghost';

const ghost: GhostApiType = new GhostApi({
  host: env.ghostHost,
  key: env.ghostContentKey,
  version: env.ghostContentVersion,
});

export default ghost;