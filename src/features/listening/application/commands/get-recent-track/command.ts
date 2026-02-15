import type { Command } from "@/shared/application/commands";
import type { GetRecentTrackResponse } from "./response";
import type { GetRecentTrackRequest } from "./request";

export class GetRecentTrack implements Command<GetRecentTrackResponse> {
  readonly request: GetRecentTrackRequest;

  public constructor(init: { request: GetRecentTrackRequest }) {
    this.request = init.request;
  }

  public async execute() {}
}
