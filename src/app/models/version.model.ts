export interface CoreVersionInfo {
  node: string;
  ts: string;
  rxjs: string;
}

export interface PackageGroup {
  label: string;
  packages: PackageItem[];
}

export interface PackageItem {
  id: string;
  label: string;
  packageName: string;
  matrixKey: string;
  optional: boolean;
}

export interface PlaybookPhase {
  from: number;
  to: number;
  nodeRequirement: string;
  nodeChanged: boolean;
  coreCommand: string;
  packageCommands: string[];
  gotchas: string[];
  globalGotchas: string[];
  fullText: string;
}
