import type { Command } from "@/shared/application/commands";
import type { ListeningRepository } from "../../ports";
import type { GetRecentTrackRequest } from "./request";
import type { GetRecentTrackResponse } from "./response";

export class GetRecentTrack implements Command<GetRecentTrackResponse> {
  readonly request: GetRecentTrackRequest;
  readonly listeningRepository: ListeningRepository;

  public constructor(init: {
    request: GetRecentTrackRequest;
    listeningRepository: ListeningRepository;
  }) {
    this.request = init.request;
    this.listeningRepository = init.listeningRepository;
  }

  public async execute() {
    const track = await this.listeningRepository.getRecentTrack(
      this.request.username,
    );

    return { track };
  }
}
