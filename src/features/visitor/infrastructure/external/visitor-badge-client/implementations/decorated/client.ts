import type { VisitorCountRequest, VisitorCountResponse } from "../../dto";
import type { VisitorBadgeClient } from "../../interface";
import { LoggingVisitorBadgeClient } from "../logging";

export class DecoratedVisitorBadgeClient implements VisitorBadgeClient {
  readonly inner: VisitorBadgeClient;

  public constructor(inner: VisitorBadgeClient) {
    this.inner = new LoggingVisitorBadgeClient(inner);
  }

  public async getVisitorCount(
    request: VisitorCountRequest,
  ): Promise<VisitorCountResponse> {
    return await this.inner.getVisitorCount(request);
  }
}
