import type { ListeningRepository } from "@/features/listening/application/ports";
import type { Track } from "@/features/listening/domain/entities";
import { logger } from "@/shared/infrastructure/logger";

export class LoggingListeningRepository implements ListeningRepository {
  readonly inner: ListeningRepository;

  public constructor(inner: ListeningRepository) {
    this.inner = inner;
  }
  public async getRecentTrack(username: string): Promise<Track> {
    try {
      logger.info(`Getting recent track for user: ${username}`);
      const track = await this.inner.getRecentTrack(username);
      logger.info(
        `Got recent track for user: ${username}, track: ${track.title} by ${track.artist}`,
      );
      return track;
    } catch (error) {
      logger.error(`Error getting recent track for user: ${username}}`);
      throw error;
    }
  }
}
