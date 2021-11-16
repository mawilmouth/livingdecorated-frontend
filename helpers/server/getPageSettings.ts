import type { SeoType } from "../../types/layout/Seo";
import SettingsReader from '../../lib/ghost/settings';

async function fetchSettings (): Promise<SeoType> {
  return await SettingsReader.read();
}

function getPageSettings (): SeoType {
  return fetchSettings() as unknown as SeoType;
}

export default getPageSettings;