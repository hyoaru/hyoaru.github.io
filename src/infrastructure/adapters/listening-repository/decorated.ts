import type { ListeningRepository } from "@/application/ports/listening-repository";
import type { Track } from "@/domain/entities";
import { LoggingListeningRepository } from "./logging";

export class DecoratedListeningRepository implements ListeningRepository {
  private inner: ListeningRepository;

  public constructor(inner: ListeningRepository) {
    this.inner = new LoggingListeningRepository(inner);
  }

  public async getRecentTrack(username: string): Promise<Track> {
    return this.inner.getRecentTrack(username);
  }
}
