import type { ListeningRepository } from "@/features/listening/application/ports";
import type { LastfmClient } from "../../../external";
import type { Track } from "@/features/listening/domain/entities";

export class LastfmListeningRepository implements ListeningRepository {
  readonly lastfmClient: LastfmClient;

  public constructor(inner: { lastfmClient: LastfmClient }) {
    this.lastfmClient = inner.lastfmClient;
  }

  public async getRecentTrack(username: string): Promise<Track> {
    const response = await this.lastfmClient.getRecentTracks({ username });
  }
}
