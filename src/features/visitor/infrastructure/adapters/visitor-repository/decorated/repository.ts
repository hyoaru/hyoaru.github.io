import type { VisitorRepository } from "@/features/visitor/application/ports";
import { LoggingVisitorRepository } from "../logging";

export class DecoratedVisitorRepository implements VisitorRepository {
  readonly inner: VisitorRepository;

  public constructor(inner: VisitorRepository) {
    this.inner = new LoggingVisitorRepository(inner);
  }

  public async getVisitorCount(): Promise<number> {
    return await this.inner.getVisitorCount();
  }
}
