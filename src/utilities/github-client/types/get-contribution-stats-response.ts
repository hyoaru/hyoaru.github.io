export type GetContributionStatsResponse = {
  total: Record<string, number>;
  contributions: {
    date: string;
    count: number;
    level: number;
  }[];
  totalContribution: number;
};
