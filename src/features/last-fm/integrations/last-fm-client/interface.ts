import type { RecentlyListenedTrack } from "./entities";

export interface LastFmClient {
  getRecentTrack(username: string): Promise<RecentlyListenedTrack>;
}
