import type { ListeningRepository } from "@/application/ports/listening-repository";
import type { Track } from "@/domain/entities";
import { logger } from "@/infrastructure/logger";

export class LoggingListeningRepository implements ListeningRepository {
  private inner: ListeningRepository;

  public constructor(inner: ListeningRepository) {
    this.inner = inner;
  }

  public async getRecentTrack(username: string): Promise<Track> {
    try {
      logger.debug(`Fetching recent track for user: ${username}`);
      const track = await this.inner.getRecentTrack(username);
      logger.info(
        `Successfully fetched recent track for user: ${username}, track: ${track.title} by ${track.artist}`,
      );
      return track;
    } catch (error) {
      logger.warn(`Error fetching recent track for user: ${username}`);
      throw error;
    }
  }
}
