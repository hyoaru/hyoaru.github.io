import type { VisitorRepository } from "@/features/visitor/application/ports";
import { logger } from "@/shared/infrastructure/logger";

export class LoggingVisitorRepository implements VisitorRepository {
  readonly inner: VisitorRepository;

  public constructor(inner: VisitorRepository) {
    this.inner = inner;
  }

  public async getVisitorCount(): Promise<number> {
    try {
      logger.info("Getting visitor count");
      const count = await this.inner.getVisitorCount();
      logger.info(`Visitor count retrieved: ${count}`);
      return count;
    } catch (error) {
      logger.error(`Error while getting visitor count: ${error}`);
      throw error;
    }
  }
}
