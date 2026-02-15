export type GithubUser = {
  username: string;
  publicRepositories: number;
  company?: string;
  location?: string;
  hireable?: boolean;
  createdAt: string;
  updatedAt: string;
};
