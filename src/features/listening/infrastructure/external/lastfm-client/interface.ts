import type { RecentTracksRequest, RecentTracksResponse } from "./dto";

export interface LastfmClient {
  getRecentTracks(request: RecentTracksRequest): Promise<RecentTracksResponse>;
}
