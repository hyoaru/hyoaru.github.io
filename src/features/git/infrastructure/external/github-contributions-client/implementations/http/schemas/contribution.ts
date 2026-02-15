export type HttpGithubContribution = {
  total: Record<string, number>;
  contributions: {
    date: string;
    count: number;
    level: number;
  }[];
};
