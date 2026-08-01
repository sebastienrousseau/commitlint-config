export interface CommitlintConfig {
  extends?: string[];
  rules?: Record<string, unknown>;
}

declare const config: CommitlintConfig;
export default config;
