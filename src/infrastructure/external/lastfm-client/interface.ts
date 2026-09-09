import type { GetRecentTracksRequest, GetRecentTracksResponse } from "./dto";

export interface LastfmClient {
  getRecentTracks(
    request: GetRecentTracksRequest,
  ): Promise<GetRecentTracksResponse>;
}
