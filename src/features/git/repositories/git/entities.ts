export type ContributionStats = {
  total: Record<string, number>;
  contributions: {
    date: string;
    count: number;
    level: number;
  }[];
  totalContribution: number;
};

export type RecentCommit = {
  username: string;
  repository: string;
  created_at: string;
};

export type UserInformation = {
  company: string | null;
  location: string;
  hireable: boolean;
  public_repos: number;
  created_at: string;
  updated_at: string;
};
