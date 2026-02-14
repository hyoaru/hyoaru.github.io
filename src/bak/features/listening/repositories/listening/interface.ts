import type { RecentlyListenedTrack } from "./entities";

export interface ListeningRepository {
  getRecentTrack(username: string): Promise<RecentlyListenedTrack>;
}
