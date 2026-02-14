import {
  HttpLastFmClient,
  HttpLastFmClientNoRecentTrackError,
} from "@/features/listening/integrations/http-last-fm-client";
import type { RecentlyListenedTrack } from "../../entities";
import {
  ListeningRepositoryError,
  ListeningRepositoryNoRecentTrackError,
} from "../../errors";
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
    } catch (error) {
      if (error instanceof HttpLastFmClientNoRecentTrackError)
        throw new ListeningRepositoryNoRecentTrackError(username, {
          cause: error,
        });

      throw new ListeningRepositoryError(
        `Failed to retrieve recent track for ${username}`,
        { cause: error },
      );
    }
  }
}
