import { logger } from "@/shared/infrastructure/logger";
import type { VisitorCountRequest, VisitorCountResponse } from "../../dto";
import type { VisitorBadgeClient } from "../../interface";

export class LoggingVisitorBadgeClient implements VisitorBadgeClient {
  readonly inner: VisitorBadgeClient;

  public constructor(inner: VisitorBadgeClient) {
    this.inner = inner;
  }
  public async getVisitorCount(
    request: VisitorCountRequest,
  ): Promise<VisitorCountResponse> {
    try {
      logger.info(`Requesting visitor count for path: ${request.path}`);
      const response = await this.inner.getVisitorCount(request);
      logger.info(`Received visitor count: ${response}`);
      return response;
    } catch (error) {
      logger.error(`Error while getting visitor count: ${error}`);
      throw error;
    }
  }
}
