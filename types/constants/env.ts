export type VersionType = "v2" | "v3" | "canary";

export interface Env {
  gaId: string;
  appURL: string;
  ghostURL: string;
  ghostContentKey: string;
  ghostVersion: VersionType;
};