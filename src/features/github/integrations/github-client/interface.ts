import type {
  ContributionStats,
  RecentCommit,
  UserInformation,
} from "./entities";

export interface GithubClient {
  getRecentCommit(username: string): Promise<RecentCommit>;
  getUserInformation(username: string): Promise<UserInformation>;
  getContributionStats(username: string): Promise<ContributionStats>;
}
