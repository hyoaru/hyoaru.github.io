import type { RecentTracksRequest, RecentTracksResponse } from "../../dto";
import type { LastfmClient } from "../../interface";
import { LoggingLastFmClient } from "../logging";

export class DecoratedLastfmClient implements LastfmClient {
  readonly inner: LastfmClient;

  public constructor(inner: LastfmClient) {
    this.inner = new LoggingLastFmClient(inner);
  }
  public async getRecentTracks(
    request: RecentTracksRequest,
  ): Promise<RecentTracksResponse> {
    return await this.inner.getRecentTracks(request);
  }
}
