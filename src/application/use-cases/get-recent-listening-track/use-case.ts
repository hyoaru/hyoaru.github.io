import type { ListeningRepository } from "@/application/ports/listening-repository";
import type { UseCase } from "../interface";
import type { GetRecentListeningTrackRequest } from "./request";
import type { GetRecentListeningTrackResponse } from "./response";

export class GetRecentListeningTrack implements UseCase<
  GetRecentListeningTrackRequest,
  GetRecentListeningTrackResponse
> {
  readonly listeningRepository: ListeningRepository;

  public constructor(init: { listeningRepository: ListeningRepository }) {
    this.listeningRepository = init.listeningRepository;
  }
  public async execute(
    request: GetRecentListeningTrackRequest,
  ): Promise<GetRecentListeningTrackResponse> {
    const track = await this.listeningRepository.getRecentTrack(
      request.username,
    );

    return { track };
  }
}
