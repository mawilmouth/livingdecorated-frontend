import GhostApi from '@tryghost/content-api';
import env from '../../constants/env';
import { GhostApiType } from '../../types/lib/ghost';

console.log('here', env);

const ghost: GhostApiType = new GhostApi({
  url: env.ghostUrl,
  key: env.ghostContentKey,
  version: env.ghostVersion
});

export default ghost;