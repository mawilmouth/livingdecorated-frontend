export type VersionType = "v2" | "v3" | "canary";

export interface Env {
  appURL: string;
  ghostURL: string;
  ghostContentKey: string;
  ghostVersion: VersionType;
};