import { HttpLastFmClient } from "@/features/listening/integrations/http-last-fm-client/client";
import type { RecentlyListenedTrack } from "../../entities";
import { NoRecentTrackError } from "../../errors";
import type { ListeningRepository } from "../../interface";

export class LastFmListeningRepository implements ListeningRepository {
  lastFmClient: HttpLastFmClient;

  public constructor(lastFmClient?: HttpLastFmClient) {
    this.lastFmClient = lastFmClient ?? new HttpLastFmClient();
  }

  public async getRecentTrack(
    username: string,
  ): Promise<RecentlyListenedTrack> {
    try {
      return await this.lastFmClient.getRecentTrack(username);
    } catch {
      throw new NoRecentTrackError(username);
    }
  }
}
