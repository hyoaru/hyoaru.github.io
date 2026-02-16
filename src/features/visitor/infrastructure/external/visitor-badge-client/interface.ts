import type { VisitorCountRequest, VisitorCountResponse } from "./dto";

export interface VisitorBadgeClient {
  getVisitorCount(request: VisitorCountRequest): Promise<VisitorCountResponse>;
}
