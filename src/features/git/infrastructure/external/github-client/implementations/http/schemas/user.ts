export type HttpGithubUser = {
  login: string;
  public_repos: number;
  company?: string;
  location?: string;
  hireable?: boolean;
  created_at: string;
  updated_at: string;
};
