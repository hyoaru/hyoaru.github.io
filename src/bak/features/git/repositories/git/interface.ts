import type {
  ContributionStats,
  RecentCommit,
  UserInformation,
} from "./entities";

export interface GitRepository {
  getRecentCommit(username: string): Promise<RecentCommit>;
  getContributionStats(username: string): Promise<ContributionStats>;
  getUserInformation(username: string): Promise<UserInformation>;
}
