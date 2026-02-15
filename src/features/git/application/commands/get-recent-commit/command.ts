import type { Command } from "@/core/application/commands";
import type { GitRepository } from "../../ports";
import type { GetRecentCommitRequest } from "./request";
import type { GetRecentCommitResponse } from "./response";

export class GetRecentCommit implements Command<GetRecentCommitResponse> {
  readonly request: GetRecentCommitRequest;
  readonly gitRepository: GitRepository;

  public constructor(init: GetRecentCommit) {
    this.request = init.request;
    this.gitRepository = init.gitRepository;
  }
  public async execute(): Promise<GetRecentCommitResponse> {
    const recentCommit = await this.gitRepository.getRecentCommit(
      this.request.username,
    );

    return { recentCommit };
  }
}
