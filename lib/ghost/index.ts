import GhostApi from '@tryghost/content-api';
import env from '../../constants/env';
import { GhostApiType } from '../../types/lib/ghost';

const ghost: GhostApiType = new GhostApi({
  url: env.ghostURL,
  key: env.ghostContentKey,
  version: env.ghostVersion
});

export default ghost;