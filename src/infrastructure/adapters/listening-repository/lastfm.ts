import {
  type ListeningRepository,
  ListeningRepositoryError,
  ListeningRepositoryNoRecentTrackError,
} from "@/application/ports/listening-repository";
import { Track } from "@/domain/entities";
import type { LastfmClient } from "@/infrastructure/external/lastfm-client";

export class LastfmListeningRepository implements ListeningRepository {
  private lastfmClient: LastfmClient;

  public constructor(lastfmClient: LastfmClient) {
    this.lastfmClient = lastfmClient;
  }

  public async getRecentTrack(username: string): Promise<Track> {
    try {
      const response = await this.lastfmClient.getRecentTracks({ username });
      const recentTrack = response.tracks.at(0);

      if (!recentTrack)
        throw new ListeningRepositoryNoRecentTrackError(username);

      return new Track({
        title: recentTrack.title,
        artist: recentTrack.artist,
        imageUrl: recentTrack.imageUrl,
      });
    } catch (error) {
      if (error instanceof ListeningRepositoryError) {
        throw error;
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new ListeningRepositoryError(`Get recent track error: ${message}`, {
        cause: error,
      });
    }
  }
}
