import type { HttpLastfmTrack } from "./track";

export interface HttpLastfmRecentTracks {
  recenttracks: {
    track: HttpLastfmTrack[];
  };
}
