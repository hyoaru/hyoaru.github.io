import type { ListeningRepository } from "@/features/listening/application/ports";
import type { Track } from "@/features/listening/domain/entities";
import { LoggingListeningRepository } from "../logging/repository";

export class DecoratedListeningRepository implements ListeningRepository {
  readonly inner: ListeningRepository;

  public constructor(inner: ListeningRepository) {
    this.inner = new LoggingListeningRepository(inner);
  }

  public async getRecentTrack(username: string): Promise<Track> {
    return await this.inner.getRecentTrack(username);
  }
}
