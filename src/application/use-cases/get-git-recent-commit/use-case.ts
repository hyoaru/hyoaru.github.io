import type { GitRepository } from "@/application/ports/git-repository";
import type { UseCase } from "../interface";
import type { GetGitRecentCommitRequest } from "./request";
import type { GetGitRecentCommitResponse } from "./response";

export class GetGitRecentCommit implements UseCase<
  GetGitRecentCommitRequest,
  GetGitRecentCommitResponse
> {
  readonly gitRepository: GitRepository;

  public constructor(init: { gitRepository: GitRepository }) {
    this.gitRepository = init.gitRepository;
  }
  public async execute(
    request: GetGitRecentCommitRequest,
  ): Promise<GetGitRecentCommitResponse> {
    const recentCommit = await this.gitRepository.getRecentCommit(
      request.username,
    );

    return recentCommit;
  }
}
