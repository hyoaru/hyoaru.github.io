export type ContributionStatsDTO = {
  total: Record<string, number>;
  contributions: {
    date: string;
    count: number;
    level: number;
  }[];
};

export type EventDTO = {
  id: string;
  type: string;
  created_at: string;
  repo: { id: number; name: string; url: string };
};

export type UserInformationDTO = {
  company: string | null;
  location: string;
  hireable: boolean | null;
  public_repos: number;
  created_at: string;
  updated_at: string;
};
