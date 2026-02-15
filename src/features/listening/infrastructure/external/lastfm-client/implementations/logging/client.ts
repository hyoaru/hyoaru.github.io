import { logger } from "@/shared/infrastructure/logger";
import type { RecentTracksRequest, RecentTracksResponse } from "../../dto";
import type { LastfmClient } from "../../interface";

export class LoggingLastFmClient implements LastfmClient {
  readonly inner: LastfmClient;

  public constructor(inner: LastfmClient) {
    this.inner = inner;
  }
  public async getRecentTracks(
    request: RecentTracksRequest,
  ): Promise<RecentTracksResponse> {
    try {
      logger.info(`Fetching recent tracks for user: ${request.username}`);
      const response = await this.inner.getRecentTracks(request);
      logger.info(
        `Successfully fetched recent tracks for user: ${request.username}`,
      );
      return response;
    } catch (error) {
      logger.error(
        `Error fetching recent tracks for user: ${request.username}`,
      );
      throw error;
    }
  }
}
