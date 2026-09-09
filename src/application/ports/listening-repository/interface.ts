import type { Track } from "@/domain/entities";

export interface ListeningRepository {
  getRecentTrack(username: string): Promise<Track>;
}
