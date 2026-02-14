import type { RecentlyListenedTrack } from "../../repositories/listening/entities";
import type { ListeningService } from "../service";
import type { ListeningServiceOperation } from "./interface";

export class GetRecentTrack implements ListeningServiceOperation<RecentlyListenedTrack> {
  username: string;

  public constructor(username: string) {
    this.username = username;
  }

  public async execute(
    service: ListeningService,
  ): Promise<RecentlyListenedTrack> {
    return await service.listeningRepository.getRecentTrack(this.username);
  }
}
