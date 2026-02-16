import {
  ListeningRepositoryError,
  ListeningRepositoryNoRecentTrackError,
  type ListeningRepository,
} from "@/features/listening/application/ports";
import { Track } from "@/features/listening/domain/entities";
import type { LastfmClient } from "../../../external";

export class LastfmListeningRepository implements ListeningRepository {
  readonly lastfmClient: LastfmClient;

  public constructor(inner: { lastfmClient: LastfmClient }) {
    this.lastfmClient = inner.lastfmClient;
  }

  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error: unknown) {
      if (error instanceof ListeningRepositoryError) {
        throw error;
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new ListeningRepositoryError(`An error has occured: ${message}`, {
        cause: error,
      });
    }
  }

  public async getRecentTrack(username: string): Promise<Track> {
    return await this.request(async () => {
      const response = await this.lastfmClient.getRecentTracks({ username });
      const recentTrack = response.tracks.at(0);
      if (!recentTrack)
        throw new ListeningRepositoryNoRecentTrackError(username);

      return new Track({
        title: recentTrack.title,
        artist: recentTrack.artist,
        imageUrl: recentTrack.imageUrl,
      });
    });
  }
}
