import type { SettingsType } from '../../types/lib/ghost/settings';
import type { GhostApiType, SettingsReaderType } from '../../types/lib/ghost';
import ghost from './';

interface InstanceType {
  read: () => Promise<SettingsType>;
}

class SettingsReader implements InstanceType {
  constructor(ghostApi: GhostApiType) {
    this.api = ghostApi.settings;
  }

  private api: SettingsReaderType;

  async read (): Promise<SettingsType> {
    return this.api.browse();
  }
}

export default new SettingsReader(ghost);