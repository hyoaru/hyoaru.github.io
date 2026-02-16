import {
  VisitorRepositoryError,
  type VisitorRepository,
} from "@/features/visitor/application/ports";
import type { VisitorBadgeClient } from "../../../external";

export class VisitorBadgeVisitorRepository implements VisitorRepository {
  readonly visitorBadgeClient: VisitorBadgeClient;

  public constructor(init: { visitorBadgeClient: VisitorBadgeClient }) {
    this.visitorBadgeClient = init.visitorBadgeClient;
  }

  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error: unknown) {
      if (error instanceof VisitorRepositoryError) {
        throw error;
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new VisitorRepositoryError(`An error has occured: ${message}`, {
        cause: error,
      });
    }
  }

  public async getVisitorCount(): Promise<number> {
    return await this.request(async () => {
      const response = await this.visitorBadgeClient.getVisitorCount({
        path: "github.com/hyoaru",
      });

      return response.count;
    });
  }
}
