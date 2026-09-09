import type { LastfmTrack } from "../models";

export interface GetRecentTracksResponse {
  tracks: LastfmTrack[];
}
