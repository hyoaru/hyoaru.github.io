import type { Track } from "@/features/listening/domain/entities";

export interface ListeningRepository {
  getRecentTrack(username: string): Promise<Track>;
}
